import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'linkedIn';
  constructor(private route: Router) {
  }
  ngOnInit(): void {
    if (this.getLoginStatus() != 0) {
        alert('You are already Logged In! ');
        this.route.navigate(['/profile']);
    }
  }

  getLoginStatus(): number {
    return +sessionStorage.getItem('loginStatus');
  }

  logOut() {
    sessionStorage.clear();
    this.route.navigate(['/login']);
  }
}
