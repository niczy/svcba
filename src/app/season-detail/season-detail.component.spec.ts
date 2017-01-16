/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { DebugElement } from '@angular/core';
import {
    RouterTestingModule
} from '@angular/router/testing';

import { SeasonDetailComponent } from './season-detail.component';

class MockAngularFire {

}
describe('SeasonDetailComponent', () => {
  let component: SeasonDetailComponent;
  let fixture: ComponentFixture<SeasonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonDetailComponent ],
      imports: [RouterTestingModule],
      providers: [
            { provide: AngularFire, useClass: MockAngularFire}
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
