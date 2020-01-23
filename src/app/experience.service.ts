import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) { }

  getExperience(): any {
    return this.http.get(environment.url + 'experience/'+sessionStorage.getItem('userId'));
  }

  deleteExperience(id: string) {
    return this.http.delete(environment.url + 'experience/delete/'+id);
  }

  saveExperience(experience:{userId: string, title: string, companyName: string, location: string, startDate: string, endDate: string, description: string}): any{
    return this.http.put(environment.url + 'experience/update', experience);
  }
}
