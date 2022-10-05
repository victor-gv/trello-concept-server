import { Request, Response, NextFunction } from "express";
import { sign } from "jsonwebtoken";
import IUser from "../../models/Users/Users.interface";
import UserModel from "../../models/Users/UsersModel";
import config from "../../config/config";

//Function to login user
const signInUser = async (req: Request, res: Response, _next: NextFunction) => {
	//First we take the email and password passed by the body of the request
	const { email, password } = req.body;
	console.log(email, password);
	if (!email || !password)
		return res.status(400).json({ ok: false, msg: "All files are required" });

	try {
		const user = await UserModel.findOne({ email: email }).exec();
		if (!user)
			return res.status(400).json({ ok: false, msg: "User not registered. Please sign up" });

		const userLogged = new UserModel(user);
		const isValidPassword = await userLogged.comparePassword(password);
		if (!isValidPassword)
			return res.status(400).json({ ok: false, msg: "Email or password are not valid" });

		const tokenPayload = {
			sub: userLogged._id,
			name: userLogged.firstName,
		};

		const token = await sign(tokenPayload, config.app.PRIVATE_KEY, {
			expiresIn: "3600s",
		});

		return res.status(200).send({ ok: true, data: { jwt: token } });
	} catch (error) {
		res.status(500).json({ ok: false, msg: error.message });
	}
};

//Function to SignUp user
const signUpUser = async (req: Request, res: Response) => {
	const { firstName, lastName, address, birthday, email, password, role } = req.body as IUser;

	if (!firstName || !lastName || !address || !birthday || !email || !password || !role)
		return res.status(400).json({ ok: false, msg: "All fields are required" });

	try {
		const emailExist = await UserModel.findOne({ email: email });

		if (emailExist) return res.status(400).json({ ok: false, msg: "User already exists" });

		const newUser = await UserModel.create({
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

		const token = await sign(tokenPayload, config.app.PRIVATE_KEY, {
			expiresIn: "3600s",
		});

		return res.status(200).send({
			ok: true,
			data: { newUser, jwt: token },
		});
	} catch (error) {
		res.status(500).json({ ok: false, msg: error.message });
	}
};
// const logout = async (req: Request, res: Response) => {

// }

export { signInUser, signUpUser };
