import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public authService: AuthService) {}
  
  login(): void{
    this.authService.login();
  }

  logout(): void{
    this.authService.logout();
  }

}
