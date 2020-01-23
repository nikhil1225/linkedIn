import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service';

import {Router} from '@angular/router';
import {FormControl, FormControlName, FormGroup, Validators, ValidationErrors, FormArray, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
//  users: { firstname: string, lastname: string, email: string, password: string};
 // id: string;
  ValidationErrors = {
    'first_name': '',
    'last_name': '',
    'email': '',
    'password': '',
    'phoneNo': ''
};

  registerForm: FormGroup;

  constructor(private route: Router, private registerService: RegisterService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'firstName': new FormControl(null),
      'lastName': new FormControl(null),
      'email': new FormControl(null, Validators.email),
      'password': new FormControl(null),
      'phone': new FormControl(null),
    });
  }

/*  checkValidation(control: FormControl) {
    // tslint:disable-next-line:forin
    for (const error in control.errors) {
      console.log(error);
    }
  }*/

  onRegister() {
    this.registerService.RegisterUser(this.registerForm.value, this.route);
  }
  /*checkValidation(control: FormControl): {[s: string]: boolean} {
    const controlErrors = control.errors;
    if (control.errors) {
      return {controlErrors[0]: true};
    } else {
      return null;
    }
  }*/


 validate(formControlName: string) {
    const control = this.registerForm.controls[formControlName];

 }
}

