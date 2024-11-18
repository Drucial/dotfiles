"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uninstallPatch = exports.install = exports.ensurePatch = exports.appendIframeStyles = void 0;
const vscode = require("vscode");
const fs = require("fs");
const path = require("path");
// import * as os from 'os';
const utils_1 = require("./utils");
const bkpName = '.apc.extension.backup';
const bootstrapName = 'bootstrap-amd.js';
const modules = 'vs/modules';
const patch = 'vs/patch';
const mainJsName = 'main.js';
const mainProcessJsName = 'process.main.js';
const workbenchHtmlName = 'workbench.html';
const browserMain = 'browser.main.js';
const installationPath = path.dirname(require.main.filename);
const bootstrapPath = path.join(installationPath, bootstrapName);
const bootstrapBackupPath = bootstrapPath + bkpName;
const mainJsPath = path.join(installationPath, mainJsName);
const mainJsBackupPath = mainJsPath + bkpName;
const workbenchHtmldir = path.join(installationPath, 'vs/code/electron-sandbox/workbench');
const workbenchHtmlPath = path.join(workbenchHtmldir, workbenchHtmlName);
const workbenchHtmlReplacementPath = workbenchHtmlPath.replace(workbenchHtmlName, "workbench-apc-extension.html");
const patchPath = path.join(installationPath, patch);
const modulesPath = path.join(installationPath, modules);
const browserEntrypointPath = path.join(patchPath, browserMain);
const iframeIndexPath = path.join(installationPath, '/vs/workbench/contrib/webview/browser/pre/index.html');
const iframeIndexBkpPath = iframeIndexPath + bkpName;
// const isWin = os.platform() === 'win32';
// function fixPath(path: string) {
//   return isWin ? "file://./" + path.replace(/\\/g, "/") : path;
// }
// const fixedPatchPath = fixPath(patchPath);
// const fixedModulesPath = fixPath(modulesPath);
function isFilesChanges(context) {
    return fs.readdirSync(modulesPath).some(name => fs.readFileSync(path.join(modulesPath, name), "utf8") !== fs.readFileSync(path.join(context.extensionPath, modules, name), "utf8"));
}
function appendIframeStyle(iframeStyle) {
    const style = typeof iframeStyle === 'string' ? (0, utils_1.getStyleFromFile)(iframeStyle) : iframeStyle instanceof Object ? (0, utils_1.getStyles)(iframeStyle) : '';
    const iframeIndex = fs.readFileSync(iframeIndexBkpPath, "utf8")
        .replace('meta http-equiv="Content-Security-Policy"', 'meta http-equiv=""')
        .replace('blockquote {', `${style}\n\t\t\tblockquote {`);
    fs.writeFile(iframeIndexPath, iframeIndex, 'utf8', () => { });
}
function getIframeConfig() {
    return (0, utils_1.getConfiguration)('apc.iframe.style') || '';
}
let fileWatcher;
async function appendIframeStyles() {
    try {
        fileWatcher?.close?.();
        const iframeStyle = getIframeConfig();
        if (iframeStyle) {
            if (!fs.existsSync(iframeIndexBkpPath)) {
                fs.renameSync(iframeIndexPath, iframeIndexBkpPath);
            }
            appendIframeStyle(iframeStyle);
            fileWatcher = typeof iframeStyle === 'string' ? fs.watch(iframeStyle, 'utf8', () => appendIframeStyle(getIframeConfig())) : undefined;
        }
        else {
            restoreIframe();
        }
        ;
    }
    catch (error) {
        console.trace(error);
    }
}
exports.appendIframeStyles = appendIframeStyles;
function restoreIframe() {
    if (fs.existsSync(iframeIndexBkpPath)) {
        fs.rename(iframeIndexBkpPath, iframeIndexPath, () => { });
    }
}
async function ensurePatch(context) {
    if (!fs.readFileSync(mainJsPath, 'utf8')?.includes('require("./bootstrap-amd")') ||
        !fs.existsSync(workbenchHtmlReplacementPath) ||
        !fs.existsSync(browserEntrypointPath) ||
        !fs.existsSync(path.join(patchPath, mainJsName)) ||
        !fs.existsSync(path.join(patchPath, mainProcessJsName)) ||
        !fs.existsSync(modulesPath) ||
        isFilesChanges(context)) {
        await install(context);
    }
}
exports.ensurePatch = ensurePatch;
function patchBootstrap(extensionPath) {
    // patch bootstrap-amd.js
    // const bootstrapResourcesPath = path.join(extensionPath, "resources", bootstrapName);
    // const inject = `
    // if (entrypoint === "vs/code/electron-main/main") {
    //   const fs = nodeRequire('fs');
    //   const p = nodeRequire('path');
    //   const readFile = fs.readFile;
    //   fs.readFile = function (path, options, callback) {
    //     if (path.endsWith(p.join('electron-main', 'main.js'))) {
    //       readFile(path, options, function () {
    //         loader(["vs/patch/main"], console.log, console.log);
    //         callback.apply(this, arguments);
    //       });
    //     }
    //     else readFile(...arguments);
    //   };
    // }
    // performance.mark('code/fork/willLoadCode');`;
    // const patchedbootstrapJs = fs.readFileSync(bootstrapResourcesPath, 'utf8');
    // .replace('amdModulesPattern: \/^vs\\\/\/', `paths: { "apc": "${fixedPatchPath}" }`)
    // .replace(`performance.mark('code/fork/willLoadCode');`, inject);
    // fs.writeFile(bootstrapPath, patchedbootstrapJs, 'utf8', () => { });
    fs.cpSync(path.join(extensionPath, "resources", bootstrapName), path.join(installationPath, bootstrapName));
    fs.cpSync(path.join(extensionPath, "resources", 'bootstrap-meta.js'), path.join(installationPath, 'bootstrap-meta.js'));
    fs.cpSync(path.join(extensionPath, "resources", 'bootstrap.js'), path.join(installationPath, 'bootstrap.js'));
    fs.cpSync(path.join(extensionPath, "resources", 'performance.js'), path.join(installationPath, 'performance.js'));
}
function patchMain(extensionPath) {
    const proccesMainPath = path.join(extensionPath, "resources", mainProcessJsName);
    const processEntrypointPath = path.join(patchPath, mainJsName);
    const processMainSourcePath = path.join(patchPath, mainProcessJsName);
    // const moduleName = 'apc-main';
    // const patchModule = 'apc-patch';
    const moduleName = 'vs/modules';
    const patchModule = 'vs/patch';
    const files = `["${patchModule}/process.main", "${moduleName}/patch.main", "${moduleName}/utils"]`;
    // const data = `require.config({\n\tpaths: {\n\t\t"${moduleName}": "${fixedModulesPath}",\n\t\t"${patchModule}": "${fixedPatchPath}"\n\t}\n});\ndefine(${files}, () => { });`;
    const data = `define(${files}, () => { });`;
    const patchedMainJs = fs.readFileSync(mainJsPath, 'utf8').replace('require_bootstrap_amd()', 'require("./bootstrap-amd")');
    // bkp main.js
    if (!fs.existsSync(mainJsBackupPath)) {
        fs.renameSync(mainJsPath, mainJsBackupPath);
    }
    // patch main.js
    fs.writeFileSync(mainJsPath, patchedMainJs, 'utf8');
    if (!fs.existsSync(patchPath)) {
        fs.mkdirSync(patchPath);
    }
    // patch proccess.main.js
    fs.writeFileSync(processMainSourcePath, fs.readFileSync(proccesMainPath));
    // patched modules/main.js
    fs.writeFileSync(processEntrypointPath, data, "utf8");
    // cp patch
    if (!fs.existsSync(modulesPath)) {
        fs.mkdirSync(modulesPath);
    }
    fs.cpSync(path.join(extensionPath, modules), modulesPath, { "recursive": true });
}
function restoreMain() {
    if (fs.existsSync(mainJsBackupPath)) {
        // restore main.js
        fs.renameSync(mainJsBackupPath, mainJsPath);
        // remove bkp file
        fs.rm(mainJsBackupPath, () => { });
    }
    // remove pached modules
    fs.existsSync(patchPath) && fs.rmSync(patchPath, { recursive: true, force: true });
    fs.existsSync(modulesPath) && fs.rmSync(modulesPath, { recursive: true, force: true });
}
function patchWorkbench(extensionPath) {
    const workbenchHtmldirRelative = path.relative(workbenchHtmldir, patchPath).replace(/\\/g, '/');
    const browserEntrypointPathRelative = path.join(workbenchHtmldirRelative, browserMain).replace(/\\/g, '/');
    // const patchedWorkbenchHtml = fs.readFileSync(workbenchHtmlPath, 'utf8')
    const patchedWorkbenchHtml = `<!DOCTYPE html>
  <html>
    <head><meta charset="utf-8" /></head>
    <body aria-label=""></body>
    <!-- Startup (do not modify order of script tags!) -->
    <script src="${browserEntrypointPathRelative}"></script>
    <script src="workbench.js"></script>
  </html>`;
    fs.writeFileSync(workbenchHtmlReplacementPath, patchedWorkbenchHtml, 'utf8');
    const data = `\
  'use strict';
  function _apcPatch(bootstrapWindow) {
    const _prev = bootstrapWindow.load;
    function bootstrapWindowLoad(modulePaths, resultCallback, options) {
      const prevBeforeLoaderConfig = options.beforeLoaderConfig;
      function beforeLoaderConfig(configuration, loaderConfig) {
        if (!loaderConfig) loaderConfig = configuration;
        if (typeof prevBeforeLoaderConfig === 'function') prevBeforeLoaderConfig(configuration, loaderConfig);
        require.define("apc-patch", { 
          load: (name, req, onload, config) => req([name], 
          (value) => req(["vs/modules/main"], 
          () => onload(value), 
          error => (console.error(error), onload(value))))
        });
      };
      options.beforeLoaderConfig = beforeLoaderConfig;
  
      if ('vs/workbench/workbench.desktop.main' === modulePaths[0]) modulePaths[0] = 'apc-patch!' + modulePaths[0];
      return _prev(modulePaths, resultCallback, options);
    };
  
    bootstrapWindow.load = bootstrapWindowLoad;
  }
  
  if (window.MonacoBootstrapWindow) _apcPatch(window.MonacoBootstrapWindow);
  else {
    Object.defineProperty(
      window,
      "MonacoBootstrapWindow",
      {
        set: function (value) { _apcPatch(value); window._patchMonacoBootstrapWindow = value; },
        get: function () { return window._patchMonacoBootstrapWindow; }
      }
    );
  }`;
    fs.writeFileSync(browserEntrypointPath, data, "utf8");
}
function restoreWorkbench() {
    fs.existsSync(workbenchHtmlReplacementPath) && fs.rm(workbenchHtmlReplacementPath, () => { });
}
async function install(context) {
    try {
        const extensionPath = context.extensionPath;
        patchBootstrap(extensionPath);
        patchMain(extensionPath);
        patchWorkbench(extensionPath);
        (0, utils_1.promptRestart)();
    }
    catch (e) {
        vscode.window.showErrorMessage(`Apc Extension failed: ${e}`);
    }
}
exports.install = install;
function uninstallPatch() {
    restoreMain();
    restoreWorkbench();
    restoreIframe();
    (0, utils_1.promptRestart)();
}
exports.uninstallPatch = uninstallPatch;
//# sourceMappingURL=patch.js.map