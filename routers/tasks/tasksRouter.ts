import { Router } from "express";
import {create, read, update, remove, readAll} from '../../controllers/base/baseController'
import { authenticate } from "../../middleware/authenticate";
import TaskModel from '../../models/Tasks/TasksModel';

const taskRouter = Router();

// taskRouter.use(authenticate)

taskRouter.post('', create(TaskModel))
taskRouter.get('/:id', read(TaskModel))
taskRouter.patch('/:id', update(TaskModel))
taskRouter.delete('/:id', remove(TaskModel))
taskRouter.get('', readAll(TaskModel))

export{taskRouter}
