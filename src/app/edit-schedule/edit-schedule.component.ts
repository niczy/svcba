import { Component, OnInit } from '@angular/core';

import { Game, CoreService } from '../core/core.service';
import { Team } from '../core/team';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.css']
})
export class EditScheduleComponent implements OnInit {

  private games: Game[];
  private activeSeason: string;

  constructor(
    private coreService: CoreService
  ) { }

  ngOnInit() {
    this.coreService.getGlobalConfig().subscribe(config => {
      this.activeSeason = config.activeSeason;
      this.coreService.getAllTeams(config.activeSeason).subscribe(rawTeams => {
        let teams: Team[] = [];
        for (let rawTeam of rawTeams) {
          teams.push(<Team> rawTeam);
        }
        this.games = this.coreService.newRound(teams);
      });
    });
  }

  confirmSchedule(games: Game[]) {
    this.coreService.updateSchedule(this.activeSeason, games);
  }
}
