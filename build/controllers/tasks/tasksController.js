"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserTask = exports.updateUserTask = exports.createUserTask = exports.getUserTasks = void 0;
const tslib_1 = require("tslib");
const TasksModel_1 = tslib_1.__importDefault(require("../../models/Tasks/TasksModel"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const createUserTask = async (req, res, _next) => {
    const { title, description, employees, initDate, endDate, boardRefID, state, tags } = req.body;
    try {
        const task = await TasksModel_1.default.create({
            title,
            description,
            employees,
            initDate,
            endDate,
            boardRefID,
            state,
            tags
        });
        res.status(200).send({ ok: true, data: task });
    }
    catch (error) {
        res.send({ ok: false, msg: 'Task cannot be created' });
    }
};
exports.createUserTask = createUserTask;
const getUserTasks = async (_req, _res, _next) => {
};
exports.getUserTasks = getUserTasks;
const updateUserTask = async (req, res, _next) => {
    console.log(req.user);
    // const {sub} = req.user;
    //We cast the _id string to an ObjectId with mongoose to update that task
    const id = new mongoose_1.default.Types.ObjectId("6329a12f5fe2f00951e13624");
    const { title, description, employees, initDate, endDate, boardRefID, state, tags } = req.body;
    try {
        const updateTask = await TasksModel_1.default.findByIdAndUpdate(id, { $set: {
                title: title,
                descrition: description,
                employees: employees,
                initDate: initDate,
                endDate: endDate,
                boardRefID: boardRefID,
                state: state,
                tags: tags
            } });
        res.status(200).send({ ok: true, data: updateTask });
    }
    catch (error) {
        res.send({ ok: false, msg: 'Task cannot be updated' });
    }
};
exports.updateUserTask = updateUserTask;
const deleteUserTask = async (_req, res, _next) => {
    //We need the id of the task to delete that task
    //const taskId = req.params.taskId or req.body.taskId
    const id = new mongoose_1.default.Types.ObjectId("6329a12f5fe2f00951e13624"); //change the string to taskId
    try {
        const deletedTask = await TasksModel_1.default.findByIdAndDelete(id);
        //Instead of msg i think we must return the User?? to load in front-end his current tasks
        res.status(200).send({ ok: true, msg: "Task deleted succesfully" });
    }
    catch (error) {
        res.send({ ok: false, msg: 'Task cannot be deleted' });
    }
};
exports.deleteUserTask = deleteUserTask;
//# sourceMappingURL=tasksController.js.map