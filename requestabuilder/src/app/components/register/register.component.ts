import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from './../../services/api-service.service';
import { NgForm } from '@angular/forms';
import { Person } from './../../models/Person.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  newUser: Person;

  constructor(private router: Router, private api: ApiServiceService) { }

  ngOnInit() {}

  signUp(registrationForm: NgForm): void {
    this.newUser = registrationForm.value;
    console.log(this.newUser);
    this.api.createNewUser(this.newUser).subscribe((data: any) => {
      console.log(data);
    })
    this.router.navigate([""]);
  }

}
