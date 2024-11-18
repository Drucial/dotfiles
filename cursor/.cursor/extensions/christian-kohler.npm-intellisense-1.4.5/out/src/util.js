'use_strict';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guessVariableName = exports.getImportStatementFromFilepath = exports.getQuickPickItems = exports.readFilesFromPackage = exports.readFilesFromDir = exports.isDirectory = void 0;
const vscode_1 = require("vscode");
const fs_1 = require("fs");
const path_1 = require("path");
const isDirectory = (path) => {
    return new Promise((resolve, reject) => {
        (0, fs_1.stat)(path, (error, stats) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(stats.isDirectory());
            }
        });
    });
};
exports.isDirectory = isDirectory;
const readFilesFromDir = (dir) => {
    return new Promise((resolve, reject) => {
        let paths = [];
        (0, fs_1.readdir)(dir, (error, files) => {
            Promise.all(files.map(file => {
                const path = (0, path_1.join)(dir, file);
                if (file === 'node_modules') {
                    return Promise.resolve([]);
                }
                return (0, exports.isDirectory)(path)
                    .then(isDir => isDir ? (0, exports.readFilesFromDir)(path) : Promise.resolve([path]));
            }))
                .then((filesPerDir) => {
                resolve([].concat(...filesPerDir));
            })
                .catch(error => reject(error));
        });
    });
};
exports.readFilesFromDir = readFilesFromDir;
const readFilesFromPackage = (packageName) => {
    return (0, exports.readFilesFromDir)((0, path_1.join)(vscode_1.workspace.rootPath, 'node_modules', packageName));
};
exports.readFilesFromPackage = readFilesFromPackage;
const getQuickPickItems = (packages) => {
    const root = vscode_1.workspace.rootPath;
    const nodeRegEx = new RegExp(`^node_modules\\${path_1.sep}`);
    return Promise.all([(0, exports.readFilesFromDir)(root)].concat(packages.map(exports.readFilesFromPackage)))
        .then((filesPerPackage) => {
        let items = [].concat(...filesPerPackage)
            .map((filePath) => {
            const partialPath = filePath.replace(root + path_1.sep, '').replace(nodeRegEx, '');
            const fragments = partialPath.split(path_1.sep);
            const label = fragments[fragments.length - 1];
            const description = fragments.join('/');
            return { label, description, filePath };
        });
        return items;
    });
};
exports.getQuickPickItems = getQuickPickItems;
const getImportStatementFromFilepath = (filePath) => {
    let partialPath = !filePath.includes('node_modules') ?
        (0, path_1.relative)(vscode_1.window.activeTextEditor.document.fileName, filePath)
        : filePath.replace((0, path_1.join)(vscode_1.workspace.rootPath, 'node_modules') + path_1.sep, '');
    let fragments = filePath.split(path_1.sep)
        .map((fragment, index, arr) => {
        return index === arr.length - 1 ?
            fragment.replace(/\.js$/, '')
                .replace(/^index$/, '')
            : fragment;
    })
        .filter(fragment => !!fragment);
    let moduleName = fragments[fragments.length - 1]
        .replace(/[\-](.)/g, (substring, ...rest) => rest[0].toUpperCase());
    moduleName = moduleName.replace(new RegExp(`${(0, path_1.extname)(moduleName)}$`), '')
        .replace(/^[^a-z$]/i, '');
    let packagePath = partialPath.split(path_1.sep).filter(fragment => fragment !== 'index.js').join('/') || '.';
    let importES6 = vscode_1.workspace.getConfiguration('npm-intellisense')['importES6'];
    let quoteType = vscode_1.workspace.getConfiguration('npm-intellisense')['importQuotes'];
    let linebreak = vscode_1.workspace.getConfiguration('npm-intellisense')['importLinebreak'];
    let declaration = vscode_1.workspace.getConfiguration('npm-intellisense')['importDeclarationType'];
    let statement;
    if (importES6) {
        statement = `import ${moduleName} from ${quoteType}${packagePath}${quoteType}`;
    }
    else {
        statement = `${declaration} ${moduleName} = require(${quoteType}${packagePath}${quoteType})`;
    }
    statement += `${linebreak}`;
    return statement;
};
exports.getImportStatementFromFilepath = getImportStatementFromFilepath;
const guessVariableName = (packageName) => packageName.replace(/-\w/gm, (sub, args) => sub.replace('-', '').toUpperCase());
exports.guessVariableName = guessVariableName;
//# sourceMappingURL=util.js.map