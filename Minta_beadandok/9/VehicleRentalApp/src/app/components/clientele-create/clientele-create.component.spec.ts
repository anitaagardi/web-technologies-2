import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteleCreateComponent } from './clientele-create.component';

describe('ClienteleCreateComponent', () => {
  let component: ClienteleCreateComponent;
  let fixture: ComponentFixture<ClienteleCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteleCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
