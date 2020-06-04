import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRequestedComponent } from './view-requested.component';

describe('ViewRequestedComponent', () => {
  let component: ViewRequestedComponent;
  let fixture: ComponentFixture<ViewRequestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRequestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRequestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
