import { Component, OnInit } from '@angular/core';

import { Designation } from './../../enums/designation.enum';
import { EmployeeList } from './../../models/employee-list.interface';

@Component({
    selector: 'app-employee-dashboard',
    templateUrl: './employee-dashboard.component.html'
})
export class EmployeeDashboardComponent implements OnInit {
    employeeList: EmployeeList[];

    constructor() {
        this.employeeList = [
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

    ngOnInit(): void {
    }

}
