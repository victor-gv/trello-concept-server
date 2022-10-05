"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = exports.taskRouter = exports.boardRouter = exports.authRouter = void 0;
const authRouter_1 = require("../routers/auth/authRouter");
Object.defineProperty(exports, "authRouter", { enumerable: true, get: function () { return authRouter_1.authRouter; } });
const boardRouter_1 = require("../routers/boards/boardRouter");
Object.defineProperty(exports, "boardRouter", { enumerable: true, get: function () { return boardRouter_1.boardRouter; } });
const tasksRouter_1 = require("../routers/tasks/tasksRouter");
Object.defineProperty(exports, "taskRouter", { enumerable: true, get: function () { return tasksRouter_1.taskRouter; } });
const userRouter_1 = require("../routers/users/userRouter");
Object.defineProperty(exports, "userRouter", { enumerable: true, get: function () { return userRouter_1.userRouter; } });
//# sourceMappingURL=index.js.map