import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Person } from './../models/Person.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { 

  }

  checkCredentials(data: Object): Observable<any> {
    const url = environment.apiUrl + 'login';
    
    console.log(data);
    return this.http.post(url, data, {responseType: 'json'});
  }

  createNewUser(data: Person): Observable<any> {
    const url = environment.apiUrl + 'register';
    console.log(data);
    return this.http.post(url, data, {responseType: 'json'});
  }
}
