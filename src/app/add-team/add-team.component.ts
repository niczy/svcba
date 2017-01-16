import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire} from 'angularfire2';
import { Team } from '../team';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
})
export class AddTeamComponent implements OnInit {
  af: AngularFire;
  router: Router;
  team: Team = { name: ''};

  constructor(af: AngularFire, router: Router) {
    this.af = af;
    this.router = router;
  }
  ngOnInit(): void {
  }
  createTeam(team): void {
    this.af.database.list('teams').push(team).then(data => {
      console.log(data);
      this.router.navigate(['/teams']);
    });
  }
}
