import { create, read, update, remove, readAll } from '../../controllers/base/baseController'
import { Router } from "express";
import BoardModel from '../../models/Boards/BoardModel';
import { authenticate } from '../../middleware/authenticate';

const boardRouter = Router();

// boardRouter.use(authenticate);

boardRouter.post('', create(BoardModel))
boardRouter.get('/:id', read(BoardModel))
boardRouter.patch('/:id', update(BoardModel))
boardRouter.delete('/:id', remove(BoardModel))
boardRouter.get('', readAll(BoardModel))

export { boardRouter };
