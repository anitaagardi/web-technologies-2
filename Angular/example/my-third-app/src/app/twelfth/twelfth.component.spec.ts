import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelfthComponent } from './twelfth.component';

describe('TwelfthComponent', () => {
  let component: TwelfthComponent;
  let fixture: ComponentFixture<TwelfthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwelfthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwelfthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
