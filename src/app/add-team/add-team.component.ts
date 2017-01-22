import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire} from 'angularfire2';
import { Team } from '../core/team';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
})
export class AddTeamComponent implements OnInit {
  af: AngularFire;
  router: Router;
  team: Team = <Team>{ name: '', id: ''};

  constructor(af: AngularFire, router: Router) {
    this.af = af;
    this.router = router;
  }
  ngOnInit(): void {
  }
  createTeam(team): void {
    team.id = team.name;
    this.af.database.list('teams').push(team).then(data => {
      console.log(data);
      this.router.navigate(['/teams']);
    });
  }
}
