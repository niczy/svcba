import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';



@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  af: AngularFire;
  constructor(af: AngularFire ) {
    this.af = af;
  }
  ngOnInit(): void {
    this.players = this.af.database.list('players');
  }

  addPlayer(): void {
    this.players.push({'name': 'Nicholas'});
    console.log('Add Player clicked');
  }

}
