"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageCompletionItem = void 0;
const vscode_1 = require("vscode");
class PackageCompletionItem extends vscode_1.CompletionItem {
    constructor(label, state) {
        super(label);
        this.kind = vscode_1.CompletionItemKind.Module;
        this.textEdit = vscode_1.TextEdit.replace(this.importStringRange(state), label);
    }
    importStringRange({ textCurrentLine, cursorLine, cursorPosition }) {
        const textToPosition = textCurrentLine.substring(0, cursorPosition);
        const quotationPosition = Math.max(textToPosition.lastIndexOf('\"'), textToPosition.lastIndexOf('\''));
        return new vscode_1.Range(cursorLine, quotationPosition + 1, cursorLine, cursorPosition);
    }
}
exports.PackageCompletionItem = PackageCompletionItem;
//# sourceMappingURL=PackageCompletionItem.js.map