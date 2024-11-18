"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmIntellisense = void 0;
const vscode_1 = require("vscode");
const path_1 = require("path");
const config_1 = require("./config");
const shouldProvide_1 = require("./shouldProvide");
const provide_1 = require("./provide");
const fs_functions_1 = require("./fs-functions");
class NpmIntellisense {
    provideCompletionItems(document, position) {
        const state = {
            rootPath: vscode_1.workspace.rootPath,
            filePath: (0, path_1.dirname)(document.fileName),
            textCurrentLine: document.lineAt(position).text,
            cursorPosition: position.character,
            cursorLine: position.line
        };
        return (0, shouldProvide_1.shouldProvide)(state) ? (0, provide_1.provide)(state, (0, config_1.getConfig)(), fs_functions_1.fsf) : Promise.resolve([]);
    }
}
exports.NpmIntellisense = NpmIntellisense;
//# sourceMappingURL=NpmIntellisense.js.map