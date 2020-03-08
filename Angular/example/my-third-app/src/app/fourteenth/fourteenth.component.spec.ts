import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourteenthComponent } from './fourteenth.component';

describe('FourteenthComponent', () => {
  let component: FourteenthComponent;
  let fixture: ComponentFixture<FourteenthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourteenthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourteenthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
