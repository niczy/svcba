/* tslint:disable:no-unused-variable */

import { TestBed, async} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
    RouterTestingModule
} from '@angular/router/testing';
import { MaterialModule } from '@angular/material';
import { AngularFire} from 'angularfire2';

class MockAngularFire {

}

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterTestingModule, MaterialModule.forRoot()],
      providers: [
            { provide: AngularFire, useClass: MockAngularFire}
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'SVCBA'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('SVCBA');
  }));
});
