import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorMenuConferenceListParticipantsComponent } from './administrator-menu-conference-list-participants.component';

describe('AdministratorMenuConferenceListParticipantsComponent', () => {
  let component: AdministratorMenuConferenceListParticipantsComponent;
  let fixture: ComponentFixture<AdministratorMenuConferenceListParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorMenuConferenceListParticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorMenuConferenceListParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
