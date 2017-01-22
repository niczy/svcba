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
import { SeasonListComponent } from './season-list/season-list.component';
import { SeasonDetailComponent } from './season-detail/season-detail.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { GComponent } from './g/g.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StandingsComponent } from './standings/standings.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';


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
    path: 'players/:playerId',
    component: PlayerDetailComponent
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
    path: 'seasons/:seasonId/:teamId',
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
  },
  {
    path: 'seasons',
    component: SeasonListComponent
  },
  {
    path: 'seasons/:seasonId',
    component: SeasonDetailComponent
  },
  {
    path: 'standings/:seasonId',
    component: StandingsComponent
  },
  {
    path: 'standings',
    component: StandingsComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'edit-schedule',
    component: EditScheduleComponent
  },
  {
    path: '',
    component: SeasonListComponent
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
    AddSeasonComponent,
    SeasonListComponent,
    SeasonDetailComponent,
    PlayerDetailComponent,
    GComponent,
    ScheduleComponent,
    StandingsComponent,
    EditScheduleComponent
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
