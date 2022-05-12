import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TaskDetailDTO } from './../../models/task-detail-dto.interface';
import { TaskCreateDTO } from './../../models/task-create-dto.interface';
import { environment } from 'src/environments/environment';

const TASK_API: string = `${environment.apiBaseUrl}/tasks`

@Injectable({
    providedIn: 'root'
})
export class TaskDashboardServiceService {

    constructor(private http: HttpClient) { }

    getAllTasks(): Observable<TaskDetailDTO[]> {
        return this.http.get<TaskDetailDTO[]>(TASK_API);
    }

    createTask(newTask: TaskCreateDTO): Observable<TaskDetailDTO> {
        return this.http.post<TaskDetailDTO>(TASK_API, newTask);
    }

    deleteTask(id: number): Observable<void> {
        return this.http.delete<void>(`${TASK_API}/${id}`);
    }
}
