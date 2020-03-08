import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifteenthComponent } from './fifteenth.component';

describe('FifteenthComponent', () => {
  let component: FifteenthComponent;
  let fixture: ComponentFixture<FifteenthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifteenthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifteenthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
