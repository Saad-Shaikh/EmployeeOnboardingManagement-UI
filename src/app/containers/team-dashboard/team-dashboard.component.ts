import { Component, OnInit } from '@angular/core';

import { TeamNameDTO } from './../../models/team-name-dto.interface';
import { TeamHasEmployeesDTO } from './../../models/team-has-employees-dto.interface';
import { TeamCreateDTO } from './../../models/team-create-dto.interface';
import { EmployeeListDTO } from './../../models/employee-list-dto.interface';

import { TeamDashboardService } from './team-dashboard.service';
import { EmployeeDashboardService } from './../employee-dashboard/employee-dashboard.service';

@Component({
    selector: 'team-dashboard',
    templateUrl: './team-dashboard.component.html'
})
export class TeamDashboardComponent implements OnInit {
    teamList: TeamNameDTO[] = [];
    selectedTeam!: TeamNameDTO | null;
    selectedTeamEmployees: TeamHasEmployeesDTO[] = [];
    selectedTeamNonEmployees: EmployeeListDTO[] = [];
    creating: boolean = false;
    editing: boolean = false;

    constructor(private teamDashboardService: TeamDashboardService, private employeeDashboardService: EmployeeDashboardService) { }

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

    onAddMember(): void {
        this.editing = true;
        const teamEmployeeIDs: number[] = this.selectedTeamEmployees.map(employee => employee.employeeListDTO.id);
        this.employeeDashboardService.getEmployeeList().subscribe(
            (employees: EmployeeListDTO[]) => {
                this.selectedTeamNonEmployees = employees.filter((employee) => !teamEmployeeIDs.includes(employee.id));
            }
        );
    }

    onMemberAdded(details: { id: number, employee: EmployeeListDTO }): void {
        this.teamDashboardService.addMemberToTeam(details.id, details.employee).subscribe(

        );
    }

    onAddClosed(): void {
        this.editing = false;
        this.selectedTeam = null;
    }

    onRemoveAllMembers(id: number): void {
        this.teamDashboardService.removeAllMembersFromTeam(id).subscribe(
            (teamMembers: TeamHasEmployeesDTO[]) => {
                this.selectedTeamEmployees = teamMembers;
            }
        );
    }

    onRemoveMember(details: { id: number, employeeId: number }): void {
        this.teamDashboardService.removeMemberFromTeam(details.id, details.employeeId).subscribe(
            (teamMembers: TeamHasEmployeesDTO[]) => {
                this.selectedTeamEmployees = teamMembers;
            }
        );
    }
}
