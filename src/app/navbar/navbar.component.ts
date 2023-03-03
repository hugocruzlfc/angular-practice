import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  goToReactive(): void {
    this.router.navigate(['contact-reactive'], {
      queryParams: { name: 'Hugo Cruz Torre' },
    });
  }

  goToTemplate(): void {
    this.router.navigate(['contact-template', '580']);
  }
}
