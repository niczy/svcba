import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list.component';
import { TeamListComponent } from './team-list.component';
import { AddTeamComponent } from './add-team.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAKsP-k2Bn5RfuACstqXaMOkC1RgB2kEbU',
  authDomain: 'svcba-a570a.firebaseapp.com',
  databaseURL: 'https://svcba-a570a.firebaseio.com/',
  storageBucket: 'gs://svcba-a570a.appspot.com'
};

const authConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

const routes: Routes = [
  {
    path: 'players',
    component: PlayerListComponent
  },
  {
    path: 'teams',
    component: TeamListComponent
  },
  {
    path: 'add-team',
    component: AddTeamComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AddTeamComponent,
    PlayerListComponent,
    TeamListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
