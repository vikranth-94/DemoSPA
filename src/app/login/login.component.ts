import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string | null = null;

onSubmit() {
  if (this.loginForm.valid) {
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe(
      () => {
        console.log('Login successful');
        this.router.navigate(['/home']);
      },
      error => {
         console.error('Login failed', error);
          this.errorMessage = 'Invalid username or password';
      }
    );
  }
}
constructor(private authService: AuthService, private router: Router){
  this.loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
}
loginForm: FormGroup;
  ngOnInit(): void {
   
  }
  isInvalid(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }
}
