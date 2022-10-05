import Task from "../Tasks/Tasks.interface";
import { Model } from 'mongoose';
export default interface IUser {
    firstName: string;
    lastName: string;
    address: string;
    birthday: Date;
    email: string;
    password: string;
    role: Role;
    profilePicture?: string;
    tasks: Task[];
}
export interface IUserMethods {
    comparePassword: (candidatePassword: string) => Promise<Boolean>;
}
export declare type UserModel = Model<IUser, {}, IUserMethods>;
declare type Role = "Admin" | "User";
export {};
