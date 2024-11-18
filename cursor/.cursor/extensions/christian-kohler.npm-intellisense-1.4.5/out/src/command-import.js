"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onImportCommand = void 0;
const vscode_1 = require("vscode");
const path_1 = require("path");
const provide_1 = require("./provide");
const fs_functions_1 = require("./fs-functions");
const config_1 = require("./config");
const util_1 = require("./util");
const quickPickOptions = {
    matchOnDescription: true
};
function onImportCommand() {
    const config = (0, config_1.getConfig)();
    vscode_1.window.showQuickPick(getPackages(config), quickPickOptions)
        .then(selection => addImportStatementToCurrentFile(selection, config));
}
exports.onImportCommand = onImportCommand;
function getPackages(config) {
    const state = {
        filePath: (0, path_1.dirname)(vscode_1.window.activeTextEditor.document.fileName),
        rootPath: vscode_1.workspace.rootPath,
        cursorLine: undefined,
        cursorPosition: undefined,
        textCurrentLine: undefined
    };
    return (0, provide_1.getNpmPackages)(state, config, fs_functions_1.fsf)
        .then(npmPackages => npmPackages.map(moduleNameToQuickPickItem))
        .catch(error => vscode_1.window.showErrorMessage(error));
}
function moduleNameToQuickPickItem(moduleName) {
    return {
        label: moduleName,
        description: 'npm module'
    };
}
function addImportStatementToCurrentFile(item, config) {
    const statementES6 = `import {} from ${config.importQuotes}${item.label}${config.importQuotes}${config.importLinebreak}`;
    const statementRequire = `${config.importDeclarationType} ${(0, util_1.guessVariableName)(item.label)} = require(${config.importQuotes}${item.label}${config.importQuotes})${config.importLinebreak}`;
    const statement = config.importES6 ? statementES6 : statementRequire;
    const insertLocation = vscode_1.window.activeTextEditor.selection.start;
    vscode_1.window.activeTextEditor.edit(edit => edit.insert(insertLocation, statement));
}
//# sourceMappingURL=command-import.js.map