import { TeamNameDTO } from './../../models/team-name-dto.interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { EmployeeListDTO } from './../../models/employee-list-dto.interface';

@Component({
    selector: 'team-edit',
    templateUrl: './team-edit.component.html',
    styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {
    @Input()
    teamId!: number | undefined;
    @Input()
    employees: EmployeeListDTO[] = [];

    @Output()
    addMemberClicked: EventEmitter<{ id: number, employee: EmployeeListDTO }> = new EventEmitter();
    @Output()
    addClosed: EventEmitter<void> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    addMemberToTeam(member: any): void {
        let _employee = this.employees.find(employee => employee.id === +member.employeeId);
        if (_employee && this.teamId) {
            this.addMemberClicked.emit(
                {
                    id: this.teamId,
                    employee: _employee
                }
            );
        }
    }

}
