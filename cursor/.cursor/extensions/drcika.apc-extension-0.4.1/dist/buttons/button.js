"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyButtons = void 0;
const vscode = require("vscode");
let subscriptions = [];
function processScm(context, statusBarButton) {
    if (vscode.extensions) {
        const git = vscode.extensions.getExtension('vscode.git')?.exports.getAPI(1);
        function updateStatusBar() {
            let totalChanges = 0;
            git?.repositories.forEach((repository) => {
                totalChanges += repository.state.workingTreeChanges.length;
            });
            statusBarButton.text = `$(source-control) ${totalChanges}`;
            statusBarButton.show();
        }
        git?.repositories.forEach((repository) => {
            const subs = repository.state.onDidChange(updateStatusBar);
            subscriptions.push(subs);
            context.subscriptions.push(subs);
        });
    }
}
function createTerminalCommand(command) {
    return async () => {
        const terminal = vscode.window.createTerminal();
        terminal.sendText(command);
        terminal.show();
    };
}
function addButton(context, button) {
    const statusBarButton = vscode.window.createStatusBarItem(button.alignment, button.priority);
    if (button.command) {
        const commandName = `apc.${button.command.replace(/\s/g, '.')}`;
        subscriptions.push(vscode.commands.registerCommand(commandName, createTerminalCommand(button.command)));
        statusBarButton.command = commandName;
    }
    else {
        statusBarButton.command = button.vscommand;
    }
    statusBarButton.text = button.text;
    statusBarButton.tooltip = button.tooltip;
    statusBarButton.show();
    if (button.vscommand === 'workbench.view.scm') {
        processScm(context, statusBarButton);
    }
    return statusBarButton;
}
let buttons = undefined;
function applyButtons(context) {
    if (buttons) {
        buttons.forEach(button => button.dispose());
    }
    subscriptions.forEach(subs => subs.dispose());
    subscriptions = [];
    const config = vscode.workspace.getConfiguration('apc').get('buttons');
    buttons = config?.map(button => addButton(context, button));
}
exports.applyButtons = applyButtons;
//# sourceMappingURL=button.js.map