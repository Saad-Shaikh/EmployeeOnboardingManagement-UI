import { Designation } from './../../enums/designation.enum';
import { Component, Input, OnInit } from '@angular/core';

import { EmployeeListDTO } from '../../models/employee-list-dto.interface';

@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
    @Input()
    employeeList: EmployeeListDTO[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}
