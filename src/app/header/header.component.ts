import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authservice:AuthService) { }

  ngOnInit(): void {
    
  }
  logout(): void {
    this.authservice.logout();
  }

}
