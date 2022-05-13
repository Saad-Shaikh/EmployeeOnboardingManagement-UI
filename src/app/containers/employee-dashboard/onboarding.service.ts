import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { OnboardingTaskAssignDTO } from '../../models/onboarding-task-assign-dto.interface';
import { OnboardingTaskDetailDTO } from '../../models/onboarding-task-detail-dto.interface';
import { OnboardingTaskUpdateDTO } from '../../models/onboarding-task-update-dto.interface';
import { environment } from 'src/environments/environment';

const EMPLOYEE_API: string = `${environment.apiBaseUrl}/employees`

@Injectable({
    providedIn: 'root'
})
export class OnboardingService {

    constructor(private http: HttpClient) { }

    getEmployeeOnboardingTasks(id: number): Observable<OnboardingTaskDetailDTO[]> {
        return this.http.get<OnboardingTaskDetailDTO[]>(`${EMPLOYEE_API}/${id}/onboarding`);
    }

    assignEmployeeOnboardingTask(id: number, onboardingTaskAssignDTO: OnboardingTaskAssignDTO): Observable<OnboardingTaskDetailDTO[]> {
        return this.http.post<OnboardingTaskDetailDTO[]>(`${EMPLOYEE_API}/${id}/onboarding`, onboardingTaskAssignDTO);
    }

    updateEmployeeOnboardingTask(obTask: OnboardingTaskUpdateDTO): Observable<OnboardingTaskDetailDTO[]> {
        return this.http.put<OnboardingTaskDetailDTO[]>(`${EMPLOYEE_API}/${obTask.employeeId}/onboarding/${obTask.id}`, obTask);
    }
}
