import { Component, OnInit } from '@angular/core';

import { EmployeeList } from './../../models/employee-list.interface';
import { EmployeeDashboardService } from './employee-dashboard.service';

@Component({
    selector: 'employee-dashboard',
    templateUrl: './employee-dashboard.component.html'
})
export class EmployeeDashboardComponent implements OnInit {
    employeeList: EmployeeList[] = [];

    constructor(private employeeDashboardService: EmployeeDashboardService) { }

    ngOnInit(): void {
        this.employeeList = this.employeeDashboardService.getEmployeeList();
    }

}
