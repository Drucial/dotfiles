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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RubocopLanguageClient = void 0;
const exec_1 = require("./exec");
const node_1 = require("vscode-languageclient/node");
const vscode_1 = require("vscode");
const CHECK_COMMAND = "bundle show rubocop-lsp";
const BUNDLE_ARGS = ["exec", "rubocop-lsp"];
class RubocopLanguageClient {
    constructor(folder) {
        this.outputChannel = vscode_1.window.createOutputChannel("RuboCop LSP");
        this.rootFolder = folder;
    }
    get gemfileLockGlob() {
        return new vscode_1.RelativePattern(this.rootFolder, "Gemfile.lock");
    }
    ;
    start(context) {
        return __awaiter(this, void 0, void 0, function* () {
            this.outputChannel.appendLine("Starting language server...");
            if (!this.rootFolder) {
                return;
            }
            const rootPath = this.rootFolder.uri.fsPath;
            // Check if `rubocop-lsp` is in the bundle using `bundle show rubocop-lsp`
            // and then checking for non-zero exit.
            if (!(yield this.checkBundle(rootPath))) {
                this.outputChannel.appendLine("");
                this.outputChannel.appendLine("Error: Cannot find `rubocop-lsp` in Gemfile.");
                this.outputChannel.appendLine("Please add `rubocop-lsp` in your Gemfile and `bundle install`.");
                this.outputChannel.appendLine("");
                return;
            }
            const executable = {
                command: "bundle",
                args: BUNDLE_ARGS,
                options: {
                    cwd: rootPath
                }
            };
            // If the extension is launched in debug mode then the debug server options are used
            // Otherwise the run options are used
            const serverOptions = {
                run: executable,
                debug: executable
            };
            // Options to control the language client
            const clientOptions = {
                // Register the server for plain text documents
                documentSelector: [
                    { scheme: 'file', language: 'ruby' }
                ],
                diagnosticCollectionName: 'RuboCop LSP',
                outputChannel: this.outputChannel,
                revealOutputChannelOn: node_1.RevealOutputChannelOn.Never,
            };
            // Create the language client and start the client.
            this.client = new node_1.LanguageClient('rubocop-lsp', 'RuboCop LSP', serverOptions, clientOptions);
            // Start the client. This will also launch the server
            this.client.start();
        });
    }
    stop() {
        if (!this.client) {
            return undefined;
        }
        this.outputChannel.appendLine("Stopping language server...");
        return this.client.stop();
    }
    restart(context) {
        this.outputChannel.appendLine("Restarting language server...");
        this.stop();
        this.start(context);
    }
    checkBundle(rootPath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield exec_1.run(CHECK_COMMAND, { cwd: rootPath });
                return true;
            }
            catch (_a) {
                return false;
            }
        });
    }
}
exports.RubocopLanguageClient = RubocopLanguageClient;
//# sourceMappingURL=rubocopLanguageClient.js.map