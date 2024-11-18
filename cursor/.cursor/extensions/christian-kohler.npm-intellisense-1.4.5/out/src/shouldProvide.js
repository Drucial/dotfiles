"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldProvide = void 0;
function shouldProvide(state) {
    return isImportOrRequire(state.textCurrentLine, state.cursorPosition)
        && !startsWithADot(state.textCurrentLine, state.cursorPosition);
}
exports.shouldProvide = shouldProvide;
function isImportOrRequire(textCurrentLine, position) {
    let isImport = textCurrentLine.substring(0, 6) === 'import';
    let isRequire = textCurrentLine.indexOf('require(') != -1;
    return (isImport && (isAfterFrom(textCurrentLine, position)
        || isImportWithoutFrom(textCurrentLine, position))) || isRequire;
}
function isAfterFrom(textCurrentLine, position) {
    let fromPosition = stringMatches(textCurrentLine, [
        ' from \'', ' from "',
        '}from \'', '}from "'
    ]);
    return fromPosition != -1 && fromPosition < position;
}
function isImportWithoutFrom(textCurrentLine, postition) {
    let modulePosition = stringMatches(textCurrentLine, [
        ' \'',
        '\'',
        '"',
        ' "'
    ], true);
    return modulePosition != -1 && modulePosition < postition;
}
function stringMatches(textCurrentLine, strings, searchFromStart = false) {
    return strings.reduce((position, str) => {
        let textPosition = searchFromStart
            ? textCurrentLine.indexOf(str)
            : textCurrentLine.lastIndexOf(str);
        return Math.max(position, textPosition);
    }, -1);
}
function startsWithADot(textCurrentLine, position) {
    const textWithinString = getTextWithinString(textCurrentLine, position);
    return textWithinString
        && textWithinString.length > 0
        && textWithinString[0] === '.';
}
function getTextWithinString(text, position) {
    const textToPosition = text.substring(0, position);
    const quoatationPosition = Math.max(textToPosition.lastIndexOf('\"'), textToPosition.lastIndexOf('\''));
    return quoatationPosition != -1 ? textToPosition.substring(quoatationPosition + 1, textToPosition.length) : undefined;
}
//# sourceMappingURL=shouldProvide.js.map