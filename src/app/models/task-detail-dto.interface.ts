import { TaskType } from './../enums/task-type.enum';

export interface TaskDetailDTO {
    id: number;
    task: string;
    taskType: TaskType
}
