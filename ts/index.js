"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// Sample exports from other modules
__export(require("./deep/foo"));
__export(require("./deep/deeper/bar"));
// Sample export of our own
exports.bas = "123";
