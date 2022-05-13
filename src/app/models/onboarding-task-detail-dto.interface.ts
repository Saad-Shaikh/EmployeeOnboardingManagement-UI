import { TaskStatus } from './../enums/task-status.enum';
import { TaskDetailDTO } from './task-detail-dto.interface';

export interface OnboardingTaskDetailDTO {
    id: number;
    task: TaskDetailDTO;
    remarks: string;
    startDate: Date;
    endDate: Date;
    links: string;
    status: TaskStatus;
}
