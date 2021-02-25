import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteleListComponent } from './clientele-list.component';

describe('ClienteleListComponent', () => {
  let component: ClienteleListComponent;
  let fixture: ComponentFixture<ClienteleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
