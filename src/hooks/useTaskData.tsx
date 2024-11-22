import {useMutation} from "react-query";
import { ICreateTaskDataOptions, ITask } from "../interfaces/task";
import axios from "axios";

function createTask(newTask: ITask) {
    return axios.post('http://localhost:4001/tasks', newTask)
}

export const useCreateTaskData = (options : ICreateTaskDataOptions) => {
    return useMutation(createTask, {...options})
}
 
