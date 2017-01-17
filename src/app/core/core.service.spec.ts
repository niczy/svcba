/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AngularFire} from 'angularfire2';
import { CoreService } from './core.service';


class MockAngularFire {

}

describe('CoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CoreService,
        { provide: AngularFire, useClass: MockAngularFire}],
    });
  });

  it('should ...', inject([CoreService], (service: CoreService) => {
    expect(service).toBeTruthy();
  }));
});
