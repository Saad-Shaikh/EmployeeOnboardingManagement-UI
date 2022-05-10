import { Component, Input, OnInit } from '@angular/core';

import { Designation } from './../../enums/designation.enum';
import { EmployeeStatus } from './../../enums/employee-status.enum';
import { EmployeeListDTO } from './../../models/employee-list-dto.interface';

@Component({
    selector: 'employee-create',
    templateUrl: './employee-create.component.html',
    styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
    designations: string[] = [];
    statuses: string[] = [];

    @Input()
    mentorList: EmployeeListDTO[] = [];

    constructor() { }

    ngOnInit(): void {
        for (let designation in Designation) {
            this.designations.push(designation);
        }
        for (let status in EmployeeStatus) {
            this.statuses.push(status);
        }
    }

}
