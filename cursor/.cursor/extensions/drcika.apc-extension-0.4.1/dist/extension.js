"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const button_1 = require("./buttons/button");
const customizations = require("./customizations.json");
const patch_1 = require("./patch");
const utils_1 = require("./utils");
function changeTheme(context) {
    const config = vscode.workspace.getConfiguration();
    const apcTheme = config.get('apc.theme');
    const colorCustomizations = config.get('workbench.colorCustomizations');
    const customeTheme = apcTheme || customizations.theme;
    customeTheme.forEach(({ color, tokens }) => {
        tokens.forEach(token => {
            colorCustomizations[token] = color;
        });
    });
    config.update('workbench.colorCustomizations', colorCustomizations, true);
}
function registerCommands(context) {
    context.subscriptions.push(vscode.commands.registerCommand('apc.extension.enable', () => {
        (0, patch_1.install)(context);
        context.globalState.update('isEnabled', true);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('apc.extension.disable', () => {
        (0, patch_1.uninstallPatch)();
        context.globalState.update('isEnabled', false);
    }));
}
function activate(context) {
    // const isRunned = context.globalState.get('isRunned');
    const isEnabled = context.globalState.get('isEnabled');
    if (isEnabled !== false) {
        (0, patch_1.ensurePatch)(context);
        (0, patch_1.appendIframeStyles)();
    }
    // else {
    //   context.globalState.update('isRunned', true);
    //   install(context);
    // }
    registerCommands(context);
    async function onDidChangeConfiguration(e) {
        if (!isEnabled) {
            return;
        }
        ;
        e.affectsConfiguration('apc.theme') && changeTheme(context);
        e.affectsConfiguration('apc.buttons') && (0, button_1.applyButtons)(context);
        e.affectsConfiguration('apc.iframe.style') && (0, patch_1.appendIframeStyles)();
        (e.affectsConfiguration('apc.electron') || e.affectsConfiguration('apc.menubar.compact')) && (0, utils_1.promptRestart)();
    }
    function onDidChangeWorkspaceFolders(e) {
        (0, button_1.applyButtons)(context);
    }
    (0, button_1.applyButtons)(context);
    isEnabled && context.subscriptions.push(vscode.workspace.onDidChangeWorkspaceFolders(onDidChangeWorkspaceFolders));
    isEnabled && context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(onDidChangeConfiguration));
}
exports.activate = activate;
function deactivate() {
    // uninstallPatch();
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map