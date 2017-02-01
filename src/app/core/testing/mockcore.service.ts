import {Team} from '../team';
export class MockCoreService {

  getGlobalConfig(): any {
    return {
      subscribe(f) {
        f({
          activeSesason: 'activeSeason'
        });
      }
    };
  }

  getAllTeams(): any {
    return {
      subscribe(f) {
        f([]);
      }
    };
  }

  getSchedule(seasonId: string): any {
    return {
      subscribe(f) {
        if (f.next) {
          f.next([]);
        } else {
          f([]);
        }
      }
    };
  }

  newRound(teams: Team[], seasonId: string): void {
  }
}
