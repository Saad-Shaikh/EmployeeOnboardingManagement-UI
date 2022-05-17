import { ProjectTaskDetailDTO } from './project-task-detail-dto.interface';

export interface ProjectAndProjectTasksDTO {
    id: number;
    name: string;
    description: string;
    repoUrl: string;
    projectTasks: ProjectTaskDetailDTO[];
}
