import { Injectable } from '@angular/core';
import { AngularFire} from 'angularfire2';

import { Season } from './season';
import { Player } from './player';
import { Team } from './team';

@Injectable()
export class CoreService {

  constructor(private af: AngularFire) { }
  /** Creates a new season */
  addSeason(season: Season): firebase.database.ThenableReference {
    return this.af.database.list('seasons').push(season);
  }

  /** Creates a new team */
  addTeam(team: Team): void {}

  /** Registers teamId under seasonId *:/
  registerTeam(teamId: string, seasonId: string): void {

  }

  /**
   * Adds player to the system.
   * Register player under team teamId if teamId is present.
   */
  addPlayer(player: Player, teamId?: string): void {

  }
}
