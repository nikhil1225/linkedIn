import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private route: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null)
    });
  }

  onLogin() {
     this.loginService.loginUser(this.loginForm.value, this.route);
  }

}
