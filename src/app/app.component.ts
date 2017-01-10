import { Component } from '@angular/core';
import { AngularFire} from 'angularfire2';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  af: AngularFire;
  title = 'SVCBA'
  constructor(af: AngularFire ) {
    this.af = af;
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }
}
