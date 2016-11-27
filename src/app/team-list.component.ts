import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
})
export class TeamListComponent implements OnInit {
  teams: FirebaseListObservable<any[]>;
  af: AngularFire;
  constructor(af: AngularFire) {
    this.af = af;
  }
  ngOnInit(): void {
    this.teams = this.af.database.list('teams');
  }
}
