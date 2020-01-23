import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {ProfileModel} from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(private http: HttpClient) { }

  getProfile(): any {
   // const profile = {about: '', designation: '', address: ''};
    return this.http.get(environment.url + 'profile/'+sessionStorage.getItem('userId'));
  }
  saveProfile(profileData: {userId: number, designation: string, address: string, about: string}) {
    //const profile = {about: '', designation: '', address: ''};
    return this.http.put(environment.url+'profile/update', profileData);

  }
  getName() {
    return sessionStorage.getItem('name');
  }
}
