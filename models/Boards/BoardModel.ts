import { Schema, model, SchemaTypes } from "mongoose";
import IBoard from "./Board.interface";
import autoPopulate from "../../utils/populate";
import { NextFunction } from 'express';

const BoardSchema = new Schema<IBoard>({
	name: {
		type: String,
		required: [true, "Name required"],
	},
	initDate: {
		type: Date,
		required: [true, "Initial Date required"],
	},
	tasks: [
		{
			type: SchemaTypes.ObjectId,
			default: [],
			ref: "Task",
		},
	],
});

BoardSchema.pre("find", function (next: NextFunction) {
	console.log('entro en board');
	this.populate("tasks");
	next();
});
BoardSchema.pre("findOne", function(next: NextFunction){
	this.populate("tasks");
	next();
});


const BoardModel = model<IBoard>("Board", BoardSchema);


export default BoardModel;
