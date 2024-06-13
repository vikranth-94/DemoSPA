import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://localhost:7075/api/User/login'; // Replace with your API endpoint

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { username, password }).pipe(
      tap(response => this.setSession(response)),
      catchError(this.handleError)
    );
  }

  private setSession(authResult: any): void {
    localStorage.setItem('token', authResult.token);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  private handleError(error: any): Observable<never> {
    console.error('Login failed', error);
    return throwError(error);
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}
