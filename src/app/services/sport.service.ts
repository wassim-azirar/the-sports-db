import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { League } from '../models/league.model';
import { Player } from '../models/player.model';
import { Team } from '../models/team.model';


@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private http: HttpClient) { }

  getAllLeagues(): Observable<League> {
    return this.http.get<League>(`${environment.apiUrl}/all_leagues.php`);
  }

  getAllTeamsInLeague(leagueName: string): Observable<Team> {
    return this.http.get<Team>(`${environment.apiUrl}/search_all_teams.php?l=${leagueName}`);
  }

  getTeamDetails(teamId: string): Observable<Team> {
    return this.http.get<Team>(`${environment.apiUrl}/lookupteam.php?id=${teamId}`);
  }

  getAllPlayerByTeam(teamId: string): Observable<Player> {
    return this.http.get<Player>(`${environment.apiUrl}/lookup_all_players.php?id=${teamId}`);
  }

  getTeamAndPlayers(teamId: string): Observable<any[]> {
    const teams = this.http.get<Player>(`${environment.apiUrl}/lookupteam.php?id=${teamId}`);
    const players = this.http.get<Player>(`${environment.apiUrl}/lookup_all_players.php?id=${teamId}`);

    return forkJoin([teams, players]);
  }
}
