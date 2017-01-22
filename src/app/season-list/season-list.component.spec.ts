/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {
    RouterTestingModule
} from '@angular/router/testing';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { MockCoreService } from '../core/testing/mockcore.service';
import { CoreService } from '../core/core.service';


import { SeasonListComponent } from './season-list.component';

class MockAngularFire {

  database = {
    list: function(key) {
      return new Promise<string[]>(
        (resolve, reject) => { resolve(['']); });
    },
  };

}
describe('SeasonListComponent', () => {
  let component: SeasonListComponent;
  let fixture: ComponentFixture<SeasonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonListComponent ],
      imports: [RouterTestingModule, MaterialModule.forRoot(), FormsModule],
      providers: [
            { provide: AngularFire, useClass: MockAngularFire},
            { provide: CoreService, useClass: MockCoreService}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
