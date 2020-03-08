import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFirstCmpComponent } from './new-first-cmp.component';

describe('NewFirstCmpComponent', () => {
  let component: NewFirstCmpComponent;
  let fixture: ComponentFixture<NewFirstCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFirstCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFirstCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
