import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { TeamNameDTO } from './../../models/team-name-dto.interface';
import { TeamHasEmployeesDTO } from './../../models/team-has-employees-dto.interface';

@Component({
    selector: 'team-detail',
    templateUrl: './team-detail.component.html',
    styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
    @Input()
    team: TeamNameDTO | null = null;
    @Input()
    teamEmployees: TeamHasEmployeesDTO[] = [];

    @Output()
    addMemberClicked: EventEmitter<void> = new EventEmitter();
    @Output()
    removeAllMembersClicked: EventEmitter<number> = new EventEmitter();
    @Output()
    removeMemberClicked: EventEmitter<{ id: number, employeeId: number }> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    removeAllMembersFromTeam(id: number): void {
        this.removeAllMembersClicked.emit(id);
    }

    removeMemberFromTeam(id: number, employeeId: number): void {
        this.removeMemberClicked.emit({
            id: id,
            employeeId: employeeId
        });
    }

}
