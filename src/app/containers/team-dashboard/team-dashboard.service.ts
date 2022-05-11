import { TeamCreateDTO } from './../../models/team-create-dto.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';
import { TeamNameDTO } from './../../models/team-name-dto.interface';
import { TeamHasEmployeesDTO } from './../../models/team-has-employees-dto.interface';

const TEAM_API: string = `${environment.apiBaseUrl}/teams`

@Injectable({
    providedIn: 'root'
})
export class TeamDashboardService {

    constructor(private http: HttpClient) { }

    getAllTeams(): Observable<TeamNameDTO[]> {
        return this.http.get<TeamNameDTO[]>(TEAM_API);
    }

    getTeamById(id: number): Observable<TeamNameDTO> {
        return this.http.get<TeamNameDTO>(`${TEAM_API}/${id}`);
    }

    getMembersForTeam(id: number): Observable<TeamHasEmployeesDTO[]> {
        return this.http.get<TeamHasEmployeesDTO[]>(`${TEAM_API}/${id}/members`);
    }

    createTeam(newTeam: TeamCreateDTO): Observable<TeamNameDTO> {
        return this.http.post<TeamNameDTO>(TEAM_API, newTeam);
    }
}
