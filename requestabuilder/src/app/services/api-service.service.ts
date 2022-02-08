import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
    return this.http.post(url, data, {responseType: 'json'})
    .pipe(
      catchError(error => {
        return of(error.error)
      })
    )
  }

  handleError(error: Error) {
    return Observable.throw(error);
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
    const url = environment.apiUrl + job.createdBy + '/' + job._id+ '/' + 'select-job';
    return this.http.post(url, job);
  }

  getDefaultEndpoint = () => {
    let userName = this.getUserName();
    return userName + '/my-jobs/'
  }

  getUserName = () => {
    let userName = '';
    userName = localStorage.getItem('user');
    return userName;
  }
}
