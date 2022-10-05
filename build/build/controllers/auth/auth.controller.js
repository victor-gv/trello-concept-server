"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpUser = exports.signInUser = void 0;
const tslib_1 = require("tslib");
const jsonwebtoken_1 = require("jsonwebtoken");
const UsersModel_1 = tslib_1.__importDefault(require("../../models/Users/UsersModel"));
const config_1 = tslib_1.__importDefault(require("../../config/config"));
//Function to login user
const signInUser = async (req, res, _next) => {
    //First we take the email and password passed by the body of the request
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({ ok: false, msg: "All files are required" });
    try {
        const user = await UsersModel_1.default.findOne({ email: email }).exec();
        if (!user)
            return res.status(400).json({ ok: false, msg: "User not registered. Please sign up" });
        const userLogged = new UsersModel_1.default(user);
        const isValidPassword = await userLogged.comparePassword(password);
        if (!isValidPassword)
            return res.status(400).json({ ok: false, msg: "Email or password are not valid" });
        const tokenPayload = {
            sub: userLogged._id,
            name: userLogged.firstName,
        };
        const token = await (0, jsonwebtoken_1.sign)(tokenPayload, config_1.default.app.PRIVATE_KEY, {
            expiresIn: "3600s",
        });
        return res.status(200).send({ ok: true, data: { jwt: token } });
    }
    catch (error) {
        res.status(500).json({ ok: false, msg: error.message });
    }
};
exports.signInUser = signInUser;
//Function to SignUp user
const signUpUser = async (req, res) => {
    const { firstName, lastName, address, birthday, email, password, role } = req.body;
    if (!firstName || !lastName || !address || !birthday || !email || !password || !role)
        return res.status(400).json({ ok: false, msg: "All fields are required" });
    try {
        const emailExist = await UsersModel_1.default.findOne({ email: email });
        if (emailExist)
            return res.status(400).json({ ok: false, msg: "User already exists" });
        const newUser = await UsersModel_1.default.create({
            firstName,
            lastName,
            address,
            birthday,
            email,
            password,
            role,
        });
        const tokenPayload = {
            sub: newUser._id,
            name: newUser.firstName,
        };
        const token = await (0, jsonwebtoken_1.sign)(tokenPayload, config_1.default.app.PRIVATE_KEY, {
            expiresIn: "3600s",
        });
        return res.status(200).send({
            ok: true,
            data: { newUser, jwt: token },
        });
    }
    catch (error) {
        res.status(500).json({ ok: false, msg: error.message });
    }
};
exports.signUpUser = signUpUser;
//# sourceMappingURL=auth.controller.js.map