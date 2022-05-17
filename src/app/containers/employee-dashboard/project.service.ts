import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ProjectAndProjectTasksDTO } from './../../models/project-and-project-tasks-dto.interface';
import { ProjectCreateDTO } from './../../models/project-create-dto.interface';
import { ProjectTaskUpdateDTO } from './../../models/project-task-update-dto.interface';
import { environment } from 'src/environments/environment';

const EMPLOYEE_API: string = `${environment.apiBaseUrl}/employees`

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    constructor(private http: HttpClient) { }

    getEmployeeProject(id: number): Observable<ProjectAndProjectTasksDTO> {
        return this.http.get<ProjectAndProjectTasksDTO>(`${EMPLOYEE_API}/${id}/project`);
    }

    addProjectForEmployee(id: number, projectCreateDTO: ProjectCreateDTO): Observable<ProjectAndProjectTasksDTO> {
        return this.http.post<ProjectAndProjectTasksDTO>(`${EMPLOYEE_API}/${id}/project`, projectCreateDTO);
    }

    updateEmployeeProjectTask(id: number, projectTaskId: number, projectTaskUpdateDTO: ProjectTaskUpdateDTO): Observable<ProjectAndProjectTasksDTO> {
        return this.http.put<ProjectAndProjectTasksDTO>(`${EMPLOYEE_API}/${id}/project/${projectTaskId}`, projectTaskUpdateDTO);
    }
}
