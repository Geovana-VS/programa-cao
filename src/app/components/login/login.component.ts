import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private readonly router: Router
  ) {}

  public navigateToSign(): void {
    this.router.navigate(['/criar-conta']);
  }

}
