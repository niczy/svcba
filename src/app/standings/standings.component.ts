import { Component, OnInit } from '@angular/core';

import { FirebaseListObservable } from 'angularfire2';
import { CoreService } from '../core/core.service';
import { Team } from '../core/team';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  private teams: Team[];
  private activeSeason: string;

  constructor(
    private coreService: CoreService
  ) { }

  ngOnInit() {
    this.coreService.getGlobalConfig().subscribe(config => {
      this.activeSeason = config.activeSeason;
      this.coreService.getAllTeams(config.activeSeason).subscribe(rawTeams => {
        this.teams = [];
        for (let rawTeam of rawTeams) {
          this.teams.push(<Team> rawTeam);
        }
        // TODO: sort the teams list
      });
    });
  }
}
