import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.css']
})
export class SeasonListComponent implements OnInit {
  seasons: FirebaseListObservable<any[]>;
  af: AngularFire;

  constructor(af: AngularFire) {
    this.af = af;
  }

  ngOnInit() {
    this.seasons = this.af.database.list('seasons');
  }

}
