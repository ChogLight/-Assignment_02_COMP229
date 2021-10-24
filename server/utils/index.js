"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDisplayName = void 0;
function userDisplayName(req) {
    if (req.user) {
        let user = req.user;
        return user.displayName.toString();
    }
}
exports.userDisplayName = userDisplayName;
//# sourceMappingURL=index.js.map