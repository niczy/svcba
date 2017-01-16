import { Component } from '@angular/core';
import { AngularFire} from 'angularfire2';
import { CoreService } from './core/core.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CoreService]
})
export class AppComponent {
  af: AngularFire;
  title = 'SVCBA';
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
