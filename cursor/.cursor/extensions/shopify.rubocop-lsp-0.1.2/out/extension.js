"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode_1 = require("vscode");
const rubocopLanguageClient_1 = require("./rubocopLanguageClient");
let client = new rubocopLanguageClient_1.RubocopLanguageClient((_a = vscode_1.workspace.workspaceFolders) === null || _a === void 0 ? void 0 : _a[0]);
function activate(context) {
    return __awaiter(this, void 0, void 0, function* () {
        const gemFileWatcher = vscode_1.workspace.createFileSystemWatcher(client.gemfileLockGlob);
        context.subscriptions.push(client.outputChannel, vscode_1.commands.registerCommand('rubocop-lsp.start', () => client.start(context)), vscode_1.commands.registerCommand('rubocop-lsp.stop', () => client.stop()), vscode_1.commands.registerCommand('rubocop-lsp.restart', () => client.restart(context)), gemFileWatcher);
        const restartClient = () => client.restart(context);
        gemFileWatcher.onDidChange(restartClient);
        gemFileWatcher.onDidCreate(restartClient);
        gemFileWatcher.onDidDelete(restartClient);
        yield client.start(context);
    });
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
    client.stop();
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map