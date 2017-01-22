import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { CoreService } from '../core/core.service';
import { Season } from '../core/season';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.css']
})
export class SeasonListComponent implements OnInit {
  private season: Season = {name: '', id: ''};
  seasons: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire,
    private coreService: CoreService) {
  }

  ngOnInit() {
    this.seasons = this.af.database.list('seasons');
  }

  setActiveSeason(seasonId: string) {
    this.coreService.setActiveSeason(seasonId);
  }

  createSeason(season): void {
    season.id = season.name;
    this.coreService.addSeason(season).then(data => {
      console.log(season);
    });
  }

}
