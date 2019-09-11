import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerEntity } from 'src/app/models/player.model';
import { SportService } from 'src/app/services/sport.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  players: Array<PlayerEntity> = [];
  teamName: string;

  constructor(private sportService: SportService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const teamId = this.route.snapshot.paramMap.get('teamId');
    this.sportService.getTeamAndPlayers(teamId).subscribe(responseList => {
      this.teamName = responseList[0].teams[0].strTeam;
      responseList[1].player.forEach(player => {
        this.players.push(player);
      });
    });
  }

  goBack() {
    this.router.navigate(['/leagues']);
  }
}
