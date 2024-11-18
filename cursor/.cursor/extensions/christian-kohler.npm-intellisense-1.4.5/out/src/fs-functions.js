"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fsf = void 0;
const fs_1 = require("fs");
exports.fsf = {
    readJson,
    isFile,
    readDir
};
function readJson(file) {
    return new Promise((resolve, reject) => {
        (0, fs_1.readFile)(file, (err, data) => err ? reject(err) : resolve(JSON.parse(data.toString())));
    });
}
function isFile(path) {
    try {
        return (0, fs_1.statSync)(path).isFile();
    }
    catch (err) {
        return false;
    }
}
function readDir(path) {
    return new Promise((resolve, reject) => {
        (0, fs_1.readdir)(path, (err, files) => err ? reject(err) : resolve(files));
    });
}
//# sourceMappingURL=fs-functions.js.map