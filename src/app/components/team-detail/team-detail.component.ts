import { TeamHasEmployeesDTO } from './../../models/team-has-employees-dto.interface';
import { Component, Input, OnInit } from '@angular/core';

import { TeamNameDTO } from './../../models/team-name-dto.interface';

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

    constructor() { }

    ngOnInit(): void {
    }

}
