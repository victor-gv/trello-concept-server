"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const BoardModel_1 = tslib_1.__importDefault(require("../../models/Boards/BoardModel"));
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
    board: {
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
TaskSchema.pre("save", async function (next) {
    try {
        const boardToUpdate = await BoardModel_1.default.findOne({ _id: this.board });
        console.log('loop');
        boardToUpdate.tasks.push(this);
        await boardToUpdate.save();
        next();
    }
    catch (error) {
        next(error);
    }
});
// TaskSchema.pre("findOneAndUpdate", async function (next: NextFunction) {
// 	try {
// 		const schema = this;
// 		const boardToUpdate = await BoardModel.findOne({ _id: this.board });
// 		boardToUpdate.tasks.push(this);
// 		await boardToUpdate.save();
// 		next();
// 	} catch (error) {
// 		next(error);
// 	}
// });
// TaskSchema.pre("find", function (next: NextFunction) {
// 	console.log('entro en task');
// 	this.populate("board");
// 	next();
// });
// TaskSchema.pre("findOne", function (next: NextFunction) {
// 	this.populate("board");
// 	next();
// });
const TaskModel = (0, mongoose_1.model)("Task", TaskSchema);
exports.default = TaskModel;
//# sourceMappingURL=TasksModel.js.map