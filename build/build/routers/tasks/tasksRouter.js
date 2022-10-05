"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = require("express");
const baseController_1 = require("../../controllers/base/baseController");
const TasksModel_1 = tslib_1.__importDefault(require("../../models/Tasks/TasksModel"));
const taskRouter = (0, express_1.Router)();
exports.taskRouter = taskRouter;
// taskRouter.use(authenticate)
taskRouter.post('', (0, baseController_1.create)(TasksModel_1.default));
taskRouter.get('/:id', (0, baseController_1.read)(TasksModel_1.default));
taskRouter.post('/:id', (0, baseController_1.update)(TasksModel_1.default));
taskRouter.delete('/:id', (0, baseController_1.remove)(TasksModel_1.default));
taskRouter.get('', (0, baseController_1.readAll)(TasksModel_1.default));
//# sourceMappingURL=tasksRouter.js.map