import { Component, OnInit } from '@angular/core';
import { AngularFire} from 'angularfire2';
import { Season } from '../season';

@Component({
  selector: 'app-add-season',
  templateUrl: './add-season.component.html',
  styleUrls: ['./add-season.component.css']
})
export class AddSeasonComponent implements OnInit {
  af: AngularFire;
  season: Season = { name: '' };

  constructor(af: AngularFire) {
    this.af = af;
  }

  ngOnInit() {
  }

  createSeason(season): void {
    this.af.database.list('seasons').push(season).then(data => {
      console.log(season);
    });
  }

}
