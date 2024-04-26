import { Component, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../authentication.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy{
  title = 'my-auth-app-test';
  private authSub;

  constructor(public authService: AuthenticationService){
    this.authSub = this.authService.auth.user$.subscribe(currentUser => { console.log(currentUser)});

  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }
}
