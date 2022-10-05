"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const tslib_1 = require("tslib");
const baseController_1 = require("../../controllers/base/baseController");
const express_1 = require("express");
const UsersModel_1 = tslib_1.__importDefault(require("../../models/Users/UsersModel"));
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
// userRouter.use(authenticate);
userRouter.post("", (0, baseController_1.create)(UsersModel_1.default));
userRouter.get("/:id", (0, baseController_1.read)(UsersModel_1.default));
userRouter.post("/:id", (0, baseController_1.update)(UsersModel_1.default));
userRouter.delete("/:id", (0, baseController_1.remove)(UsersModel_1.default));
userRouter.get("", (0, baseController_1.readAll)(UsersModel_1.default));
//# sourceMappingURL=userRouter.js.map