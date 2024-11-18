"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNpmPackages = exports.provide = void 0;
const path_1 = require("path");
const repl = require("repl");
const PackageCompletionItem_1 = require("./PackageCompletionItem");
function provide(state, config, fsf) {
    return getNpmPackages(state, config, fsf)
        .then(dependencies => {
        return config.packageSubfoldersIntellisense ?
            readModuleSubFolders(dependencies, state, fsf) : dependencies;
    })
        .then(dependencies => dependencies.map(d => toCompletionItem(d, state)));
}
exports.provide = provide;
function getNpmPackages(state, config, fsf) {
    return fsf.readJson(getPackageJson(state, config, fsf))
        .then(packageJson => [
        ...Object.keys(packageJson.dependencies || {}),
        ...Object.keys(config.scanDevDependencies ? packageJson.devDependencies || {} : {}),
        ...(config.showBuildInLibs ? getBuildInModules() : [])
    ])
        .catch(() => []);
}
exports.getNpmPackages = getNpmPackages;
function getBuildInModules() {
    return repl._builtinLibs;
}
function toCompletionItem(dependency, state) {
    return new PackageCompletionItem_1.PackageCompletionItem(dependency, state);
}
function getPackageJson(state, config, fsf) {
    return config.recursivePackageJsonLookup ?
        nearestPackageJson(state.rootPath, state.filePath, fsf) :
        (0, path_1.join)(state.rootPath, 'package.json');
}
function nearestPackageJson(rootPath, currentPath, fsf) {
    const absoluteCurrentPath = (0, path_1.resolve)(currentPath);
    const absoluteRootPath = (0, path_1.resolve)(rootPath);
    const packageJsonFullPath = (0, path_1.join)(absoluteCurrentPath, 'package.json');
    if (absoluteCurrentPath === absoluteRootPath || fsf.isFile(packageJsonFullPath)) {
        return packageJsonFullPath;
    }
    return nearestPackageJson(absoluteRootPath, (0, path_1.resolve)(absoluteCurrentPath, '..'), fsf);
}
function readModuleSubFolders(dependencies, state, fsf) {
    const fragments = state.textCurrentLine.split('from ');
    const pkgFragment = fragments[fragments.length - 1].split(/['"]/)[1];
    const pkgFragmentSplit = pkgFragment.split('/');
    const packageName = pkgFragmentSplit[0];
    if (dependencies.filter(dep => dep === packageName).length) {
        const path = (0, path_1.join)(state.rootPath, 'node_modules', ...pkgFragmentSplit);
        // Todo: make the replace function work with other filetypes as well
        return fsf.readDir(path)
            .then(files => files.map(file => pkgFragment + file.replace(/\.js$/, '')))
            .catch(err => ['']);
    }
    return Promise.resolve(dependencies);
}
//# sourceMappingURL=provide.js.map