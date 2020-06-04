import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLoanprogramComponent } from './edit-loanprogram.component';

describe('EditLoanprogramComponent', () => {
  let component: EditLoanprogramComponent;
  let fixture: ComponentFixture<EditLoanprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLoanprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLoanprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
