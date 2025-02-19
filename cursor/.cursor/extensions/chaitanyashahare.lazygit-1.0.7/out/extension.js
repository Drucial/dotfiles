"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    let disposable = vscode.commands.registerCommand("lazygit.openLazygit", openLazygit);
    context.subscriptions.push(disposable);
}
exports.activate = activate;
async function openLazygit() {
    if (!(await focusActiveLazygitInstance())) {
        await newLazygitInstance();
    }
}
/**
 * Tries to find an instance and focus on the tab.
 * @returns If an instance was found and focused
 */
async function focusActiveLazygitInstance() {
    for (let openTerminal of vscode.window.terminals) {
        if (openTerminal.name === "lazygit") {
            openTerminal.show();
            return true;
        }
    }
    return false;
}
async function newLazygitInstance() {
    // Always create a new terminal
    await vscode.commands.executeCommand("workbench.action.terminal.newInActiveWorkspace");
    let terminal = vscode.window.activeTerminal;
    // Read the command from the configuration
    const command = vscode.workspace
        .getConfiguration()
        .get("lazygit.command", "lazygit && exit");
    terminal.sendText(command);
    terminal.show();
    // Move the terminal to the editor area
    await vscode.commands.executeCommand("workbench.action.terminal.moveToEditor");
    // Move focus back to the editor view
    await vscode.commands.executeCommand("workbench.action.focusActiveEditorGroup");
    if (vscode.window.terminals.length > 1) {
        // Close the terminal if it's not the only one
        await vscode.commands.executeCommand("workbench.action.togglePanel");
    }
}
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map