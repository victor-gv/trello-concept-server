"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const BoardModel_1 = tslib_1.__importDefault(require("../../build/models/Boards/BoardModel"));
const TaskSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title required"],
    },
    description: {
        type: String,
        required: [true, "Description required"],
    },
    employees: [
        {
            type: mongoose_1.SchemaTypes.ObjectId,
            ref: "User",
            default: [],
        },
    ],
    initDate: {
        type: Date,
        required: [true, "initDate required"],
    },
    endDate: {
        type: Date,
        required: [true, "endDate required"],
    },
    boardRefID: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: "Board",
        required: [true, "BoardID required"],
    },
    state: {
        type: String,
        required: [true, "Task state required"],
    },
    tags: [
        {
            type: String,
        },
    ],
});
TaskSchema.pre("save", async function () {
    const boardToUpdate = await BoardModel_1.default.findOne({ _id: this.boardRefID });
    boardToUpdate.tasks.push(this);
});
TaskSchema.pre("findOne", function (next) {
    this.populate(["boardRefID", "employees"]);
    next();
});
const TaskModel = (0, mongoose_1.model)("Task", TaskSchema);
exports.default = TaskModel;
//# sourceMappingURL=TasksModel.js.map