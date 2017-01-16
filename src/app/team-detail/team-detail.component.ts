import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
})
export class TeamDetailComponent implements OnInit {
  private sub: any;
  private teamId: string;
  constructor(private af: AngularFire,
    private route: ActivatedRoute,
    private router: Router) {
  }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
        this.teamId = params['teamId'];
      }
    );
  }
}
