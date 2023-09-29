"use strict";
exports.__esModule = true;
exports.conflictError = void 0;
function conflictError(message) {
    var errorMsg = message || "Conflict";
    return {
        message: errorMsg
    };
}
exports.conflictError = conflictError;
