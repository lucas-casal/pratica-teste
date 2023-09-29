"use strict";
exports.__esModule = true;
exports.notFoundError = void 0;
function notFoundError(message) {
    var errorMsg = message || "Not Found";
    return {
        message: errorMsg
    };
}
exports.notFoundError = notFoundError;
