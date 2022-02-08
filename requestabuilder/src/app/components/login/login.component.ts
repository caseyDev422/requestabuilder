import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from '../../models/Person.model';
import { ApiServiceService } from './../../services/api-service.service';
import { DataOutputService } from './../../services/data-output.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private api: ApiServiceService, private output: DataOutputService) { };
  loginInfo: Person;
  message: any;
  

  ngOnInit() {
  }

  onInput() {
   if (this.message) {
    this.message = undefined;
   }
  }
  
  submitForm(loginDetails: Person, loginForm: NgForm) {

      const login = {
        username: loginDetails.username,
        password: loginDetails.password
      }
      console.log('LOGIN', login);
      this.api.checkCredentials(login).subscribe((data) => {
        console.log('success');
        if(data.message === 'Invalid Credentials. Try again or register') {
          this.router.navigate(['login'])
          this.message = data.message;
          loginForm.resetForm();

        } else {
          console.log(data);
          localStorage.setItem('user', data.name);
          this.output.setJobData(data.jobs);
          this.router.navigate(['home']);
        }
      });
     
      loginForm.resetForm();
  }

  redirectToRegistration(loginForm: NgForm) {
    this.router.navigate(['register']);
    loginForm.resetForm();
  }

}
