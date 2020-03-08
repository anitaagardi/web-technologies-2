import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirteenthComponent } from './thirteenth.component';

describe('ThirteenthComponent', () => {
  let component: ThirteenthComponent;
  let fixture: ComponentFixture<ThirteenthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirteenthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirteenthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
