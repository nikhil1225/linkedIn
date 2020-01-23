import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private  http: HttpClient) { }

  getEducation(): any {
    return this.http.get(environment.url + 'education/'+sessionStorage.getItem('userId'));
  }

  deleteEducation(id : string){
    return this.http.delete(environment.url+ 'education/delete/'+id);
  }
  saveEducation(education: {userId: string, organisation: string, startDate: string, endDate: string, degree: string, fieldOfStudy: string}){
    return this.http.put(environment.url + 'education/update', education);
  }

}
