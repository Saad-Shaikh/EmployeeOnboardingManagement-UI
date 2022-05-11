import { Component, OnInit } from '@angular/core';

import { TeamNameDTO } from './../../models/team-name-dto.interface';
import { TeamHasEmployeesDTO } from './../../models/team-has-employees-dto.interface';
import { TeamDashboardService } from './team-dashboard.service';
import { TeamCreateDTO } from './../../models/team-create-dto.interface';

@Component({
    selector: 'team-dashboard',
    templateUrl: './team-dashboard.component.html'
})
export class TeamDashboardComponent implements OnInit {
    teamList: TeamNameDTO[] = [];
    selectedTeam: TeamNameDTO | null = null;
    selectedTeamEmployees: TeamHasEmployeesDTO[] = [];
    creating: boolean = false;

    constructor(private teamDashboardService: TeamDashboardService) { }

    ngOnInit(): void {
        this.fetchTeams();
    }

    fetchTeams(): void {
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

    onCreateTeam(newTeam: TeamCreateDTO): void {
        this.teamDashboardService.createTeam(newTeam).subscribe(
            (team: TeamNameDTO) => {
                this.creating = false;
                this.ngOnInit();
                this.selectedTeam = team;
            }
        );
    }

    onCreateCancelled(): void {
        this.creating = false;
        this.selectedTeam = null;
    }
}
