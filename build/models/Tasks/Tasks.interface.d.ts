import User from "../Users/Users.interface";
import IBoard from "../Boards/Board.interface";
export default interface ITask {
    title: string;
    description: string;
    employees: User[];
    initDate: Date;
    endDate: Date;
    board: IBoard;
    state: TaskState;
    tags?: Tag[];
}
export declare type Tag = {
    title: string;
    color: Color;
};
declare type TaskState = "Todo" | "In progress" | "Done";
declare type Color = "Red" | "Green" | "Yellow";
export {};
