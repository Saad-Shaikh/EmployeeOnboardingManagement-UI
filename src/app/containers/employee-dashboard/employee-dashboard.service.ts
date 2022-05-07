import { Injectable } from '@angular/core';

import { EmployeeList } from './../../models/employee-list.interface';
import { Designation } from 'src/app/enums/designation.enum';

@Injectable({
    providedIn: 'root'
})
export class EmployeeDashboardService {

    constructor() { }

    getEmployeeList(): EmployeeList[] {
        return [
            {
                id: 1,
                name: 'Employee 1',
                designation: Designation.SOFTWARE_ENGINEER
            },
            {
                id: 2,
                name: 'Employee 2',
                designation: Designation.SENIOR_SOFTWARE_ENGINEER
            }
        ];
    }
}
