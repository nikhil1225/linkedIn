import { Injectable } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  RegisterUser (postData: {'first_name': string, 'last_name': string, 'email': string, 'password': string, 'phoneno': string}, route) {
    this.http.post(environment.url+'register', postData).subscribe(value => {
      console.log(value);
      route.navigate(['/login']);
    }, error => {
      console.log(error);
      alert('error while registering');
    });
  }
}
