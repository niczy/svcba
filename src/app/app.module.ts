import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AddSeasonComponent } from './add-season/add-season.component';
import { MaterialModule } from '@angular/material';


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
    path: 'teams/:teamId',
    component: TeamDetailComponent
  },
  {
    path: 'teams/:teamId/add-player',
    component: AddPlayerComponent
  },
  {
    path: 'add-team',
    component: AddTeamComponent
  },
  {
    path: 'add-season',
    component: AddSeasonComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AddTeamComponent,
    PlayerListComponent,
    TeamListComponent,
    TeamDetailComponent,
    AddPlayerComponent,
    AddSeasonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfig),
    RouterModule.forRoot(routes),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
