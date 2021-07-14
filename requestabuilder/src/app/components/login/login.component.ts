import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from '../../models/Person';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { };
  loginInfo: Person;
  

  ngOnInit() {

  }

  submitForm(loginDetails: Person, loginForm: NgForm) {

    //temp setup, will need to make certain length reqs for username and password
    if (loginDetails.username === 'test' && loginDetails.password === 'test') {
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
