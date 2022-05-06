import { Component, Input, OnInit } from '@angular/core';

import { EmployeeList } from './../../models/employee-list.interface';

@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
    @Input()
    employeeList: EmployeeList[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}
