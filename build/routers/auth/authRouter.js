"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../../controllers/auth/auth.controller");
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
authRouter.post("/signUp", auth_controller_1.signUpUser);
authRouter.post("/signIn", auth_controller_1.signInUser);
//# sourceMappingURL=authRouter.js.map