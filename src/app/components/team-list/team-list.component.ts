import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { TeamNameDTO } from './../../models/team-name-dto.interface';

@Component({
    selector: 'team-list',
    templateUrl: './team-list.component.html',
    styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
    @Input()
    teamList: TeamNameDTO[] = [];

    @Output()
    teamSelected: EventEmitter<number> = new EventEmitter();
    @Output()
    createClicked: EventEmitter<void> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

}
