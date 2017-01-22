/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MockCoreService } from '../core/testing/mockcore.service';
import { CoreService } from '../core/core.service';

import { EditScheduleComponent } from './edit-schedule.component';

describe('EditScheduleComponent', () => {
  let component: EditScheduleComponent;
  let fixture: ComponentFixture<EditScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditScheduleComponent ],
      providers: [
            { provide: CoreService, useClass: MockCoreService}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
