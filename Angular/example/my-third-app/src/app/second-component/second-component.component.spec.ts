import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponentComponent } from './second-component.component';

describe('SecondComponentComponent', () => {
  let component: SecondComponentComponent;
  let fixture: ComponentFixture<SecondComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
