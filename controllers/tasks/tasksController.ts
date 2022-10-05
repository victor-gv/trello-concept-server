import { Request, Response, NextFunction } from "express";
import TaskModel from '../../models/Tasks/TasksModel';
import ITask from '../../models/Tasks/Tasks.interface';
import AuthRequest from "../../middleware/authenticate";
import mongoose,{ObjectId} from "mongoose";
import { set } from "mongoose";
import { resetLevel } from "loglevel";

const createUserTask = async (req: Request, res: Response, _next: NextFunction) => {
  const { title, description, employees, initDate, endDate, boardRefID, state, tags } = req.body as ITask
  try {
      const task = await TaskModel.create({
          title,
          description,
          employees,
          initDate,
          endDate,
          boardRefID,
          state,
          tags
      }) 

      res.status(200).send({ok: true, data: task})
      
  } catch (error) {
      res.send({ok:false, msg: 'Task cannot be created'})
  }
}

const getUserTasks = async (_req: Request, _res: Response, _next: NextFunction) => {

}

const updateUserTask = async (req: AuthRequest, res: Response, _next: NextFunction) => {
  console.log(req.user);
  
  // const {sub} = req.user;

  //We cast the _id string to an ObjectId with mongoose to update that task
  const id = new mongoose.Types.ObjectId("6329a12f5fe2f00951e13624");
  
  const {title, description,employees,initDate,endDate, boardRefID,state, tags} = req.body;

  try{
    const updateTask = await TaskModel.findByIdAndUpdate(id, {$set:{
        title:title,
        descrition:description,
        employees:employees,
        initDate:initDate,
        endDate:endDate,
        boardRefID:boardRefID,
        state:state,
        tags:tags
      }})

      res.status(200).send({ok:true, data:updateTask})
  }catch(error){
    
    res.send({ok:false, msg:'Task cannot be updated'})
  }
  
}

const deleteUserTask = async (_req: Request, res: Response, _next: NextFunction) => {

  //We need the id of the task to delete that task
  //const taskId = req.params.taskId or req.body.taskId
  const id = new mongoose.Types.ObjectId("6329a12f5fe2f00951e13624");//change the string to taskId

  try {
    const deletedTask = await TaskModel.findByIdAndDelete(id);

    //Instead of msg i think we must return the User?? to load in front-end his current tasks
    res.status(200).send({ok:true, msg:"Task deleted succesfully"});
  } catch (error) {
    res.send({ok:false, msg:'Task cannot be deleted'})
  }
}

export { getUserTasks, createUserTask, updateUserTask, deleteUserTask }