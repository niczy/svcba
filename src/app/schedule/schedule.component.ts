import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable} from 'angularfire2';

import { Game, CoreService } from '../core/core.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  private games: FirebaseListObservable<any[]>;
  constructor(
    private coreService: CoreService
  ) { }

  ngOnInit() {
    this.coreService.getGlobalConfig().subscribe(config => {
      this.games = this.coreService.getSchedule(config.activeSeason);
    });
  }

}
