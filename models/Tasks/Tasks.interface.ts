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

export type Tag = {
	title: string;
	color: Color;
};

type TaskState = "Todo" | "In progress" | "Done";
type Color = "Red" | "Green" | "Yellow";
