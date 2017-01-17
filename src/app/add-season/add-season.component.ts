import { Component, OnInit } from '@angular/core';
import { Season } from '../core/season';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-add-season',
  templateUrl: './add-season.component.html',
  styleUrls: ['./add-season.component.css']
})
export class AddSeasonComponent implements OnInit {
  season: Season = { name: '', id: ''};

  constructor(private core: CoreService) {
  }

  ngOnInit() {
  }

  createSeason(season): void {
    season.id = season.name;
    this.core.addSeason(season).then(data => {
      console.log(season);
    });
  }

}
