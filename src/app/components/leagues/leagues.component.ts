import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { LeagueEntity } from 'src/app/models/league.model';
import { TeamEntity } from 'src/app/models/team.model';
import { SportService } from 'src/app/services/sport.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {
  leaguesForm: FormGroup;
  filteredLeagues: Observable<LeagueEntity[]>;
  leagues: Array<LeagueEntity> = [];
  teams: Array<TeamEntity> = [];

  constructor(private sportService: SportService, private router: Router, private formBuilder: FormBuilder) {
    this.leaguesForm = this.formBuilder.group({
      leagues: new FormControl(''),
    });

    this.sportService.getAllLeagues().subscribe(result => {
      result.leagues.forEach(league => {
        if (league.strSport === 'Soccer') {
          this.leagues.push(league);
        }
      });
    });
  }

  ngOnInit() {
    this.filteredLeagues = this.leaguesForm.get('leagues').valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.leagues.slice())
      );
  }

  private _filter(name: string): LeagueEntity[] {
    const filterValue = name.toLowerCase();
    return this.leagues.filter(option => option.strLeague.toLowerCase().includes(filterValue));
  }

  getTeams(league: LeagueEntity) {
    this.sportService.getAllTeamsInLeague(league.strLeague).subscribe(result => {
      this.teams = [];
      result.teams.forEach(team => {
        this.teams.push(team);
      });
    });
  }

  onTeamClick(teamId: string) {
    this.router.navigate([`/players/${teamId}`])
  }

  clearSelection() {
    this.leaguesForm.setValue({ leagues: ''});
  }

  displayFn(league?: LeagueEntity): string | undefined {
    return league ? league.strLeague : undefined;
  }
}
