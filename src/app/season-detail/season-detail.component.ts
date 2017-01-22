import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CoreService } from '../core/core.service';
import { Team } from '../core/team';

@Component({
  selector: 'app-season-detail',
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.css']
})
export class SeasonDetailComponent implements OnInit {
  private sub: any;
  private seasonId: string;
  private team: Team = <Team>{ name: '', id: '' };
  private teams: FirebaseListObservable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private coreService: CoreService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.seasonId = params['seasonId'];
      this.teams = this.coreService.getAllTeams(this.seasonId);
      console.log(this.seasonId);
    });
  }

  registerTeam(team: Team) {
    this.coreService.registerTeam(team, this.seasonId);
  }
}
