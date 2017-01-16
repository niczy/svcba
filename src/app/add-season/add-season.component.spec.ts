/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { AngularFire} from 'angularfire2'

import { AddSeasonComponent } from './add-season.component';
import { FormsModule } from '@angular/forms';


class MockAngularFire {

}

describe('AddSeasonComponent', () => {
  let component: AddSeasonComponent;
  let fixture: ComponentFixture<AddSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSeasonComponent ],
      imports: [MaterialModule.forRoot(), FormsModule],
      providers: [
            { provide: AngularFire, useClass: MockAngularFire}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
