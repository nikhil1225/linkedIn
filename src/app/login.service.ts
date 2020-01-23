import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(postData: {email: string, password: string}, route) {
    this.http.post(environment.url + 'login', postData).subscribe(value => {
      console.log(value);
      route.navigate(['/profile']);
      sessionStorage.setItem('loginStatus', '1')
      sessionStorage.setItem('userId', value['id']);
      sessionStorage.setItem('name', value['name']);
    }, error => {
      console.log(error);
      alert('Password or email invalid');
    });

  }
}
