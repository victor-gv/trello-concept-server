"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const index_1 = require("./routers/index");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//Routers
app.use("/auth", index_1.authRouter);
app.use("/user", index_1.userRouter);
app.use("/board", index_1.boardRouter);
app.use("/task", index_1.taskRouter);
app.use("/", (_req, res) => {
    res.send("TrelloApp Server");
});
exports.default = app;
//# sourceMappingURL=server.js.map