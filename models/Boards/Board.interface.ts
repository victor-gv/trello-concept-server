import ITask from "../Tasks/Tasks.interface"

export default interface IBoard{
    name: string,
    initDate: Date,
    tasks : ITask[]
}