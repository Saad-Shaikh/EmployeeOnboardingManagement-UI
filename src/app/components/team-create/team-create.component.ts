import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { TeamCreateDTO } from './../../models/team-create-dto.interface';

@Component({
    selector: 'team-create',
    templateUrl: './team-create.component.html',
    styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {
    @Output()
    teamCreated: EventEmitter<TeamCreateDTO> = new EventEmitter();
    @Output()
    createCancelled: EventEmitter<void> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    createTeam(team: TeamCreateDTO): void {
        this.teamCreated.emit(team);
    }

}
