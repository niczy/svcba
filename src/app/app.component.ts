import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { CoreService } from './core/core.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CoreService]
})
export class AppComponent implements OnInit {
  title = 'SVCBA';
  private globalConfig: FirebaseObjectObservable<any>;
  constructor(
    private af: AngularFire,
    private coreService: CoreService) {
  }

  ngOnInit(): void {
    this.globalConfig = this.coreService.getGlobalConfig();
    this.globalConfig.subscribe(v => {
      console.log(v);
      if (!v.$exists()) {
        this.coreService.initGlobalConfig();
      }
    });
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }
}
