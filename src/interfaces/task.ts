import { priority } from "../types/taskTypes";

export interface ITask { 
    name: string,
    priority: priority,
    content: string
}

export interface DropdownProps {
    value: string;
    label: string;
  }
  
export interface DropdownComponentProps {
    options: DropdownProps[]; // options should be an array of DropdownProps
}

export interface ICreateTaskDataOptions {
    onSuccess: () => void,
    onError: () => void
}