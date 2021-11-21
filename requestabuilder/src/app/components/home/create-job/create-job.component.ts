import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Job } from 'src/app/models/Job.model';
import { ApiServiceService } from './../../../services/api-service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss'],
})
export class CreateJobComponent implements OnInit {
  newJob: Job;
  difficulty: string;

  constructor(private api: ApiServiceService, private router: Router) { }

  ngOnInit() {}

  createJob(newJobForm: NgForm) {
    this.newJob = newJobForm.value;
    this.newJob.difficulty = this.difficulty;
    console.log(newJobForm.value);
    console.log(this.difficulty);
    console.log(this.newJob);
    this.api.createNewJob(this.newJob).subscribe((data: any) => {
      console.log(data);
    });
    this.router.navigate(['home'])
    
  }

  checkDifficulty(difficulty: any) {
    if (difficulty === 1) {
      this.difficulty = 'easy';
    } else if (difficulty === 2) {
      this.difficulty = 'medium';
    } else {
      this.difficulty = 'hard';
    }
  }

}
