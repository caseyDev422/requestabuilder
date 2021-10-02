import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from '../../models/Person.model';
import { ApiServiceService } from './../../services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private api: ApiServiceService) { };
  loginInfo: Person;
  

  ngOnInit() {

  }

  submitForm(loginDetails: Person, loginForm: NgForm) {

    //temp setup, will need to make certain length reqs for username and password
    if (loginDetails.username === 'test' && loginDetails.password === 'test') {
      const login = {
        username: loginDetails.username,
        password: loginDetails.password
      }
      console.log('LOGIN', login);
      this.api.checkCredentials(login).subscribe((data) => {
        console.log('success');
        console.log('data', data);
      }),(error => {
        console.error('not able to send login creds');
      });
      this.router.navigate(['home']);
      loginForm.resetForm();
    }
    this.loginInfo = loginDetails;
    console.log(loginDetails);
    console.log(this.loginInfo);
    this.loginInfo.username = '';
    this.loginInfo.password = '';
  }

  redirectToRegistration(loginForm: NgForm) {
    this.router.navigate(['register']);
    loginForm.resetForm();
  }

}
