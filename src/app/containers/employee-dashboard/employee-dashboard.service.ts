import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EmployeeListDTO } from '../../models/employee-list-dto.interface';
import { EmployeeDetailDTO } from './../../models/employee-detail-dto.interface';
import { EmployeeCreateDTO } from './../../models/employee-create-dto.interface';
import { OnboardingTaskDetailDTO } from './../../models/onboarding-task-detail-dto.interface';
import { OnboardingTaskUpdateDTO } from './../../models/onboarding-task-update-dto.interface';
import { environment } from 'src/environments/environment';

const EMPLOYEE_API: string = `${environment.apiBaseUrl}/employees`

@Injectable({
    providedIn: 'root'
})
export class EmployeeDashboardService {

    constructor(private http: HttpClient) { }

    getEmployeeList(): Observable<EmployeeListDTO[]> {
        return this.http.get<EmployeeListDTO[]>(EMPLOYEE_API);
    }

    getEmployeeById(id: number): Observable<EmployeeDetailDTO> {
        return this.http.get<EmployeeDetailDTO>(`${EMPLOYEE_API}/${id}`);
    }

    createEmployee(newEmployee: EmployeeCreateDTO): Observable<EmployeeDetailDTO> {
        return this.http.post<EmployeeDetailDTO>(EMPLOYEE_API, newEmployee);
    }

    getEmployeeOnboardingTasks(id: number): Observable<OnboardingTaskDetailDTO[]> {
        return this.http.get<OnboardingTaskDetailDTO[]>(`${EMPLOYEE_API}/${id}/onboarding`);
    }

    updateEmployeeOnboardingTask(obTask: OnboardingTaskUpdateDTO): Observable<OnboardingTaskDetailDTO[]> {
        return this.http.put<OnboardingTaskDetailDTO[]>(`${EMPLOYEE_API}/${obTask.employeeId}/onboarding/${obTask.id}`, obTask);
    }
}
