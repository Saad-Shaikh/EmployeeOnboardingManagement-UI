import { TaskDetailDTO } from './task-detail-dto.interface';

export interface OnboardingTaskAssignDTO {
    id: number;
    taskList: TaskDetailDTO[];
}
