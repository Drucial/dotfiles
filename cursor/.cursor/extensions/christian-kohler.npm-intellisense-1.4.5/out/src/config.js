"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = void 0;
const vscode_1 = require("vscode");
function getConfig() {
    const configuration = vscode_1.workspace.getConfiguration('npm-intellisense');
    return {
        scanDevDependencies: configuration['scanDevDependencies'],
        recursivePackageJsonLookup: configuration['recursivePackageJsonLookup'],
        packageSubfoldersIntellisense: configuration['packageSubfoldersIntellisense'],
        showBuildInLibs: configuration['showBuildInLibs'],
        importES6: configuration['importES6'],
        importQuotes: configuration['importQuotes'],
        importLinebreak: configuration['importLinebreak'],
        importDeclarationType: configuration['importDeclarationType']
    };
}
exports.getConfig = getConfig;
//# sourceMappingURL=config.js.map