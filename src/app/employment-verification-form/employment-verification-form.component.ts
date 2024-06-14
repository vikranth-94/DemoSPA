import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VerifyService } from '../services/verify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employment-verification-form',
  templateUrl: './employment-verification-form.component.html',
  styleUrls: ['./employment-verification-form.component.css']
})
export class EmploymentVerificationFormComponent implements OnInit {
  responseData:any;
  constructor(private verifySvc: VerifyService, private router: Router) {
    this.verificationForm = new FormGroup({
      employeeId: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[0-9]*$')]),
      companyName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      verificationCode: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }
  verificationForm: FormGroup;
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.verificationForm.valid) {
      const { employeeId, companyName, verificationCode } = this.verificationForm.value;
      this.verifySvc.Verify(employeeId, companyName, verificationCode).subscribe(
        (response) => {
          this.responseData = response;
          if (response.status === 200) {
            alert("Success! Employee Exists");
          }
          else{
            alert("Fail! No Match Found");
          }
        },
        (error) => {
          alert("Fail! No Match Found");
        }
      );
    }
  }
  isInvalid(controlName: string): boolean {
    const control = this.verificationForm.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }
 
  
}
