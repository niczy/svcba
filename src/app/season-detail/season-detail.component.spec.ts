/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { DebugElement } from '@angular/core';
import { Team } from '../core/team';
import {
    RouterTestingModule
} from '@angular/router/testing';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CoreService } from '../core/core.service';

import { SeasonDetailComponent } from './season-detail.component';

class MockCoreService {
  getAllTeams(seasonId: string): Promise<Team[]> {
    return new Promise<Team[]>(
      (resolve, reject) => { resolve([{name: 'team', id: 'id'}]); });
  }
};
describe('SeasonDetailComponent', () => {
  let component: SeasonDetailComponent;
  let fixture: ComponentFixture<SeasonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonDetailComponent ],
      imports: [RouterTestingModule, MaterialModule.forRoot(), FormsModule],
      providers: [
            { provide: CoreService, useClass: MockCoreService}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
