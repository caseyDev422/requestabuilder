import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { };
  login = "Login";
  aBoolean = true;
  

  ngOnInit() {

  }

  someFunction = () => {
    console.log('click!!!!!');
    this.aBoolean = !this.aBoolean;
    this.router.navigate(['/register']);
  }

}
