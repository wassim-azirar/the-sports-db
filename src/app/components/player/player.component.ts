import { Component, Input } from '@angular/core';
import { PlayerEntity } from 'src/app/models/player.model';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  private _player: PlayerEntity;

  @Input()
  get player(): PlayerEntity {
    return this._player;
  }

  set player(player: PlayerEntity) {
    this._player = player;
  }

  getImage() {
    return this.player.strCutout ? this.player.strCutout : this.player.strThumb;
  }
}
