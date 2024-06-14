import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {
  private verifyUrl = 'https://localhost:7075/api/verify-employment'; 

  constructor(private http: HttpClient, private router: Router) {}

  Verify(employeeId: string, companyName: string,verificationCode: string): Observable<any> {
    return this.http.post<any>(this.verifyUrl, { employeeId, companyName,verificationCode });
  }
}
