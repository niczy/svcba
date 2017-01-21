import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Season } from './season';
import { Player } from './player';
import { Team } from './team';

const SEASONS_KEY = 'seasons';
const PLAYERS_KEY = 'players';
const SEASON_TEAM_KEY = 'season-team';
const TEAM_PLAYER_KEY = 'team-player';
const SEASON_TEAM_PLAYER = 'season-team-player';

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

  /**
   * Adds player to the system.
   * Register player under team teamId in given season if teamId and seasonId
   * are present.
   */
  addPlayer(player: Player, teamId: string): void {
    this.af.database.list(PLAYERS_KEY).push(player);
    this.af.database.list(this.buildTeamPlayerKey(teamId)).push(player);
  }

  private buildSeasonTeamKey(seasonId: string): string {
    return SEASON_TEAM_KEY + ':' + seasonId;
  }

  private buildTeamPlayerKey(teamId: string): string {
    return TEAM_PLAYER_KEY + ':' + teamId;
  }
}
