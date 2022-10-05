"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, "First name required"],
    },
    lastName: {
        type: String,
        required: [true, "Last name required"],
    },
    address: {
        type: String,
        required: [true, "Address required"],
    },
    birthday: {
        type: Date,
        required: [true, "Birthday required"],
    },
    email: {
        type: String,
        required: [true, "Email required"],
    },
    password: {
        type: String,
        required: [true, "Password required"],
    },
    role: {
        type: String,
        required: [true, "Role required"],
    },
    profilePicture: {
        type: String,
    },
    tasks: [
        {
            type: mongoose_1.SchemaTypes.ObjectId,
            default: [],
            ref: "Task",
        },
    ],
});
UserSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        console.log("this", this);
        return await bcrypt_1.default.compare(candidatePassword, this.password);
    }
    catch (error) {
        return false;
    }
};
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    try {
        const hash = await bcrypt_1.default.hash(this.password, 12);
        this.password = hash;
        return next();
    }
    catch (error) {
        return next(error);
    }
});
// UserSchema.pre("find", function (next: NextFunction) {
// 	this.populate("tasks");
// 	next();
// });
// UserSchema.pre("findOne", function (next: NextFunction) {
// 	this.populate("tasks");
// 	next();
// });
UserSchema.set("toJSON", {
    transform: (_, result) => {
        delete result.password;
        delete result.__v;
        return result;
    },
});
const UserModel = (0, mongoose_1.model)("User", UserSchema);
exports.default = UserModel;
//# sourceMappingURL=UsersModel.js.map