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
  userName: string;
  
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

    this.userName = this.getUserName();
    const url = environment.apiUrl +this.userName + '/create-job';
    console.log(url);
    console.log(job);
    return this.http.post(url, job, {responseType: 'json'});
  }

  getCreatedJobs(): Observable<any> {
    this.defaultEndpoint = this.getDefaultEndpoint();
    const url = environment.apiUrl + this.defaultEndpoint + 'created';
    return this.http.get(url);
  }

  getAllJobs(): Observable<any> {
    const url = environment.apiUrl + 'all-jobs';
    return this.http.get(url);
  }

  claimJob(job: Job): Observable<any> {
    this.userName = this.getUserName();
    const url = environment.apiUrl + this.userName + '/' + job.jobId + '/' + 'update-job';
    return this.http.put(url, job);
  }

  getDefaultEndpoint = () => {
    let userName = this.getUserName();
    return userName + '/my-jobs/'
  }

  getUserName = () => {
    let userName = '';
    this.output.getName().subscribe((name: string) => {
      userName = name;
    }).unsubscribe();
    return userName;
  }
}
