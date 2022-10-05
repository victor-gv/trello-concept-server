"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const config_1 = tslib_1.__importDefault(require("../config/config"));
const MONGO_ATLAS_URI = config_1.default.db.url || "";
function connect() {
    return mongoose_1.default.connect(MONGO_ATLAS_URI);
}
exports.default = connect;
//# sourceMappingURL=connect.js.map