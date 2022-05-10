import { Component, OnInit } from '@angular/core';

import { TeamNameDTO } from './../../models/team-name-dto.interface';
import { TeamHasEmployeesDTO } from './../../models/team-has-employees-dto.interface';
import { TeamDashboardService } from './team-dashboard.service';

@Component({
    selector: 'team-dashboard',
    templateUrl: './team-dashboard.component.html'
})
export class TeamDashboardComponent implements OnInit {
    teamList: TeamNameDTO[] = [];
    selectedTeam: TeamNameDTO | null = null;
    selectedTeamEmployees: TeamHasEmployeesDTO[] = [];

    constructor(private teamDashboardService: TeamDashboardService) { }

    ngOnInit(): void {
        this.teamDashboardService.getAllTeams().subscribe(
            (teams: TeamNameDTO[]) => {
                this.teamList = teams;
            }
        );
    }

    getSelectedTeam(id: number): void {
        this.teamDashboardService.getTeamById(id).subscribe(
            (team: TeamNameDTO) => {
                this.selectedTeam = team;
            }
        );
        this.teamDashboardService.getMembersForTeam(id).subscribe(
            (teamMembers: TeamHasEmployeesDTO[]) => {
                this.selectedTeamEmployees = teamMembers;
            }
        );
    }
}
