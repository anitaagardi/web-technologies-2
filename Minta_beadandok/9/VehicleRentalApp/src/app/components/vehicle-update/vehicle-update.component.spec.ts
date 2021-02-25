import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleUpdateComponent } from './vehicle-update.component';

describe('VehicleUpdateComponent', () => {
  let component: VehicleUpdateComponent;
  let fixture: ComponentFixture<VehicleUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
