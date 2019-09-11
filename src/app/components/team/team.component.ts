import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TeamEntity } from 'src/app/models/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  private _team: TeamEntity;

  @Input()
  get team(): TeamEntity {
    return this._team;
  }

  set team(team: TeamEntity) {
    this._team = team;
  }

  @Output() teamClicked: EventEmitter<any> = new EventEmitter();

  getLogo() {
    return this._team.strTeamBadge;
  }

  onClick() {
    this.teamClicked.emit(this._team.idTeam);
  }
}
