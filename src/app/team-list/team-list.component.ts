import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
})
export class TeamListComponent implements OnInit {
  teams: FirebaseListObservable<any[]>;
  globalConfig: FirebaseObjectObservable<any>;
  constructor(
    private coreService: CoreService) {}
  ngOnInit(): void {
    this.globalConfig = this.coreService.getGlobalConfig();
    this.globalConfig.subscribe(config => {
      this.teams = this.coreService.getAllTeams(config.activeSeason);
    })
  }
}
