"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardRouter = void 0;
const tslib_1 = require("tslib");
const baseController_1 = require("../../controllers/base/baseController");
const express_1 = require("express");
const BoardModel_1 = tslib_1.__importDefault(require("../../models/Boards/BoardModel"));
const boardRouter = (0, express_1.Router)();
exports.boardRouter = boardRouter;
// boardRouter.use(authenticate);
boardRouter.post('', (0, baseController_1.create)(BoardModel_1.default));
boardRouter.get('/:id', (0, baseController_1.read)(BoardModel_1.default));
boardRouter.post('/:id', (0, baseController_1.update)(BoardModel_1.default));
boardRouter.delete('/:id', (0, baseController_1.remove)(BoardModel_1.default));
boardRouter.get('', (0, baseController_1.readAll)(BoardModel_1.default));
//# sourceMappingURL=boardRouter.js.map