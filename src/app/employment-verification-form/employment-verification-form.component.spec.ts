import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentVerificationFormComponent } from './employment-verification-form.component';

describe('EmploymentVerificationFormComponent', () => {
  let component: EmploymentVerificationFormComponent;
  let fixture: ComponentFixture<EmploymentVerificationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentVerificationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploymentVerificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
