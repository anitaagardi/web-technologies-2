import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAppylingTdkComponent } from './user-appyling-tdk.component';

describe('UserAppylingTdkComponent', () => {
  let component: UserAppylingTdkComponent;
  let fixture: ComponentFixture<UserAppylingTdkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAppylingTdkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAppylingTdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
