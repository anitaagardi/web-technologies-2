import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteleUpdateComponent } from './clientele-update.component';

describe('ClienteleUpdateComponent', () => {
  let component: ClienteleUpdateComponent;
  let fixture: ComponentFixture<ClienteleUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteleUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
