import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Person } from './../models/Person.model';
import { Job } from './../models/Job.model';
import { DataOutputService } from './data-output.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
 defaultEndpoint: any;

  constructor(private http: HttpClient, private output: DataOutputService) {

  }

  checkCredentials(data: Object): Observable<any> {
    const url = environment.apiUrl + 'login';
    
    console.log(data);
    return this.http.post(url, data, {responseType: 'json'});
  }

  createNewUser(data: Person): Observable<any> {
    const url = environment.apiUrl + 'register';
    console.log(url);
    console.log(data);
    return this.http.post(url, data, {responseType: 'json'});
  }

  createNewJob(job: Job): Observable<any> {
    this.defaultEndpoint = this.getDefaultEndpoint();
    const url = environment.apiUrl +this.defaultEndpoint + 'created';
    console.log(url);
    console.log(job);
    return this.http.post(url, job, {responseType: 'json'});
  }

  getDefaultEndpoint = () => {
    let userName = ''
    this.output.getName().subscribe((name: string) => {
      console.log('NAME', name);
      userName = name;
    }).unsubscribe();
    return userName + '/my-jobs/'
  }
}
