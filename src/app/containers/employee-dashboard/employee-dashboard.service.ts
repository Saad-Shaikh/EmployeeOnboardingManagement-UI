import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EmployeeListDTO } from '../../models/employee-list-dto.interface';
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
}
