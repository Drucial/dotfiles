'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode_1 = require("vscode");
const NpmIntellisense_1 = require("./NpmIntellisense");
const command_import_1 = require("./command-import");
function activate(context) {
    if (vscode_1.workspace.rootPath) {
        const provider = new NpmIntellisense_1.NpmIntellisense();
        const triggers = ['"', '\'', '/'];
        const selector = ['typescript', 'javascript', 'javascriptreact', 'typescriptreact'];
        context.subscriptions.push(vscode_1.languages.registerCompletionItemProvider(selector, provider, ...triggers));
        context.subscriptions.push(vscode_1.commands.registerCommand('npm-intellisense.import', command_import_1.onImportCommand));
    }
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map