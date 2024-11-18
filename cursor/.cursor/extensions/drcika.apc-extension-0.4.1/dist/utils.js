"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStyles = exports.getStyleFromFile = exports.getConfiguration = exports.promptRestart = void 0;
const vscode = require("vscode");
const fs = require("fs");
const configKey = 'update.mode';
async function promptRestart() {
    const config = vscode.workspace.getConfiguration();
    const value = config.inspect(configKey);
    await config.update(configKey, config.get(configKey) === 'default' ? 'manual' : 'default', vscode.ConfigurationTarget.Global);
    config.update(configKey, value?.globalValue, vscode.ConfigurationTarget.Global);
}
exports.promptRestart = promptRestart;
function getConfiguration(configuration) {
    const config = vscode.workspace.getConfiguration();
    return config.get(configuration);
}
exports.getConfiguration = getConfiguration;
function getStyleFromFile(file) {
    try {
        return fs.readFileSync(file, "utf8");
    }
    catch (error) {
        return '';
    }
}
exports.getStyleFromFile = getStyleFromFile;
function generateStyleFomObject(obj, styles = '') {
    for (const property in obj) {
        const value = obj[property];
        if (['number', 'string'].includes(typeof value)) {
            styles += `${property}: ${value}; `;
        }
    }
    return styles;
}
function getStyles(styleSheet, style = '') {
    for (const selector in styleSheet) {
        const value = styleSheet[selector];
        const styles = typeof value === 'string' ? value : typeof value === 'object' ? generateStyleFomObject(value) : '';
        style += `${selector} { ${styles} }\n\t\t\t`;
    }
    return style;
}
exports.getStyles = getStyles;
//# sourceMappingURL=utils.js.map