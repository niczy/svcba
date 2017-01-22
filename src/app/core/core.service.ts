import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Season } from './season';
import { Player } from './player';
import { Team } from './team';

const GLOBAL_CONFIG_KEY = 'global-config';
const ACTIVE_SEASON = 'activeSeason';
const SEASONS_KEY = 'seasons';
const PLAYERS_KEY = 'players';
const SEASON_TEAM_KEY = 'season-team';
const SEASON_SCHEDULE_KEY = 'season-shchdule';
const SEASON_TEAM_STANDING_KEY = 'season-team-standings';
const TEAM_PLAYER_KEY = 'team-player';
const SEASON_TEAM_PLAYER = 'season-team-player';

export class Game {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  homeTeamScore: number;
  awayTeamScore: number;
  time: number; // game time in ms.
}
@Injectable()
export class CoreService {


  constructor(private af: AngularFire) { }

  /** Creates a new season */
  addSeason(season: Season): firebase.database.ThenableReference {
    return this.af.database.list(SEASONS_KEY).push(season);
  }

  getAllSeasons(): FirebaseListObservable<any[]> {
    return this.af.database.list(SEASONS_KEY);
  }

  /** Registers teamId under seasonId */
  registerTeam(team: Team, seasonId: string): firebase.database.ThenableReference {
    return this.af.database.list(this.buildSeasonTeamKey(seasonId)).push(team);
  }

  getAllTeams(seasonId: string): FirebaseListObservable<any[]> {
    return this.af.database.list(this.buildSeasonTeamKey(seasonId));
  }

  getAllPlayers(teamId: string): FirebaseListObservable<any[]> {
    return this.af.database.list(this.buildTeamPlayerKey(teamId));
  }

  getSchedule(seasonId: string): FirebaseListObservable<any[]> {
    return this.af.database.list(this.buildSeasonScheduleKey(seasonId));
  }

  updateSchedule(seasonId: string, games: Game[]) {
    console.log('schedule to set ' + games);
    this.getSchedule(seasonId).remove().then(_ => {
      let scheduledGames = this.af.database.list(this.buildSeasonScheduleKey(seasonId));
      for (let game of games) {
        game.time = 1;
        game.homeTeamScore = -1;
        game.awayTeamScore = -1;
        let rawGame: any = {};
        rawGame.id = '1';
        rawGame.time = game.time;
        let rawGameRef = scheduledGames.push(rawGame);
        rawGameRef.child('homeTeam').set({
          name: game.homeTeam.name,
          id: game.homeTeam.id
        });
        rawGameRef.child('awayTeam').set({
          name: game.awayTeam.name,
          id: game.awayTeam.id
        });
      }
    });
  }

  // Generate a new round of games give a list of teams.
  newRound(teams: Team[]): Game[] {
    let games: Game[] = [];
    for (let i = 0; i < teams.length / 2; i++) {
      games.push(<Game>{
        homeTeam: teams[i],
        awayTeam: teams[teams.length - i - 1]
      });
    }
    return games;
  }

  /**
   * Adds player to the system.
   * Register player under team teamId in given season if teamId and seasonId
   * are present.
   */
  addPlayer(player: Player, teamId: string): void {
    this.af.database.list(PLAYERS_KEY).push(player);
    this.af.database.list(this.buildTeamPlayerKey(teamId)).push(player);
  }

  setActiveSeason(seasonId: string): void {
    console.log('season id is ' + seasonId);
    this.af.database.object(GLOBAL_CONFIG_KEY).update({'activeSeason': seasonId});
  }

  getGlobalConfig(): FirebaseObjectObservable<any> {
    return this.af.database.object(GLOBAL_CONFIG_KEY);
  }

  initGlobalConfig(): void {
    this.af.database.object(GLOBAL_CONFIG_KEY).set({'activeSeason': ''});
  }

  private buildSeasonTeamKey(seasonId: string): string {
    return SEASON_TEAM_KEY + ':' + seasonId;
  }

  private buildSeasonTeamStandingKey(seasonId: string): string {
    return SEASON_TEAM_STANDING_KEY + ':' + seasonId;
  }

  private buildTeamPlayerKey(teamId: string): string {
    return TEAM_PLAYER_KEY + ':' + teamId;
  }

  private buildSeasonScheduleKey(seasonId: string): string {
    return SEASON_SCHEDULE_KEY + ':' + seasonId;
  }
}
