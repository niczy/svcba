import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CoreService } from '../core/core.service';
import { Player } from '../core/player';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
})
export class TeamDetailComponent implements OnInit {
  private sub: any;
  private teamId: string;
  private players: FirebaseListObservable<any[]>;
  private player: Player {name: '', id: ''};
  constructor(private af: AngularFire,
    private route: ActivatedRoute,
    private router: Router,
    private coreService: CoreService) {
  }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
        this.teamId = params['teamId'];
        this.players = this.coreService.getAllPlayers(this.teamId);
      }
    );
  }

  addPlayer(player: Player): void {
    player.id = player.name;
    this.coreService.addPlayer(player, this.teamId);
  }
}
