import { TaskStatus } from './../enums/task-status.enum';
import { TaskDetailDTO } from './task-detail-dto.interface';

export interface ProjectTaskDetailDTO {
    id: number;
    task: TaskDetailDTO;
    remarks: String;
    startDate: Date;
    endDate: Date;
    links: string;
    status: TaskStatus;
}
