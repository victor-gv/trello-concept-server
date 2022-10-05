import { NextFunction } from "express";

export default (field: string) =>
	function (next: NextFunction) {
		console.log('entro');
		this.populate(field);
		next();
	};

