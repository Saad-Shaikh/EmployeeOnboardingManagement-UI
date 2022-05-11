import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Designation } from './../../enums/designation.enum';
import { EmployeeStatus } from './../../enums/employee-status.enum';
import { EmployeeListDTO } from './../../models/employee-list-dto.interface';
import { EmployeeCreateDTO } from './../../models/employee-create-dto.interface';

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

    @Output()
    employeeCreated: EventEmitter<EmployeeCreateDTO> = new EventEmitter();
    @Output()
    createCancelled: EventEmitter<void> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
        for (let designation in Designation) {
            this.designations.push(designation);
        }
        for (let status in EmployeeStatus) {
            this.statuses.push(status);
        }
    }

    createEmployee(employee: EmployeeCreateDTO): void {
        const mentorIDs = employee.mentoredBy;
        const mentoredBy: EmployeeListDTO[] = [];
        for (let mentorID of mentorIDs) {
            this.mentorList.forEach(mentor => {
                if (mentor.id === +mentorID) {
                    mentoredBy.push(mentor);
                }
            });
        }
        employee.mentoredBy = mentoredBy;
        this.employeeCreated.emit(employee);
    }

}
