"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const UsersModel_1 = tslib_1.__importDefault(require("./Users/UsersModel"));
const BoardModel_1 = tslib_1.__importDefault(require("./Boards/BoardModel"));
const TasksModel_1 = tslib_1.__importDefault(require("./Tasks/TasksModel"));
exports.default = {
    User: UsersModel_1.default,
    Board: BoardModel_1.default,
    Task: TasksModel_1.default
};
//# sourceMappingURL=index.js.map