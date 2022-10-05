"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BoardSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Name required"]
    },
    tasks: [{
            type: mongoose_1.SchemaTypes.ObjectId,
            default: [],
            ref: "Task"
        }]
});
BoardSchema.pre("findOne", function (next) {
    this.populate("tasks");
    next();
});
const BoardModel = (0, mongoose_1.model)("Board", BoardSchema);
exports.default = BoardModel;
//# sourceMappingURL=BoardModel.js.map