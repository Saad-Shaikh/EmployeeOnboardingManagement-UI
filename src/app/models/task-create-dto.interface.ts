import { TaskType } from './../enums/task-type.enum';

export interface TaskCreateDTO {
    task: string;
    taskType: TaskType;
}
