import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {

  constructor(
    private readonly router: Router
  ) {}

  public navigateToLogin(): void {
    this.router.navigate(['/logar']);
  }

}
