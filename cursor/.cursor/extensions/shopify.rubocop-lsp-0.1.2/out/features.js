"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemanticHighlightingFeature = void 0;
class SemanticHighlightingFeature {
    fillClientCapabilities(capabilities) {
        var _a;
        const tokenModifiers = [];
        const tokenTypes = [
            "send"
        ];
        const caps = (_a = capabilities.textDocument) !== null && _a !== void 0 ? _a : { moniker: {} };
        caps.semanticTokens = {
            tokenTypes: tokenTypes,
            tokenModifiers: tokenModifiers,
            formats: ["relative"],
            requests: {
                range: false,
                full: {
                    delta: true
                }
            }
        };
        capabilities.textDocument = caps;
    }
    initialize(_capabilities, _documentSelector) { }
    dispose() { }
}
exports.SemanticHighlightingFeature = SemanticHighlightingFeature;
//# sourceMappingURL=features.js.map