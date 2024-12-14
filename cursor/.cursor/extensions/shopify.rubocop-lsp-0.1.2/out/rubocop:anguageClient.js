"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exec_1 = require("./exec");
const CHECK_COMMAND = "bundle show rubocop-lsp";
const SERVER_COMMAND = "bundle exec rubocop-lsp";
class LanguageClient {
}
function start(context) {
    const folders = workspace.workspaceFolders;
    if (!folders) {
        // If there are no open folders, we have nothing to do.
        return;
    }
    const rootPath = folders[0].uri.fsPath;
    // Check if `rubocop-lsp` is in the bundle using `bundle show rubocop-lsp`
    // and then checking for non-zero exit.
    try {
        exec_1.run(CHECK_COMMAND, { cwd: rootPath });
    }
    catch (e) {
        return;
    }
    // If the extension is launched in debug mode then the debug server options are used
    // Otherwise the run options are used
    const serverOptions = {
        run: { command: SERVER_COMMAND, options: { cwd: rootPath } },
        debug: { command: SERVER_COMMAND, options: { cwd: rootPath } }
    };
    // Options to control the language client
    const clientOptions = {
        // Register the server for plain text documents
        documentSelector: [
            { scheme: 'file', language: 'ruby' }
        ],
        diagnosticCollectionName: 'RuboCop LSP',
    };
    // Create the language client and start the client.
    client = new LanguageClient('rubocop-lsp', 'RuboCop LSP', serverOptions, clientOptions);
    // Start the client. This will also launch the server
    client.start();
}
//# sourceMappingURL=rubocop:anguageClient.js.map