import { Injectable } from '@angular/core';
import { Person } from './../models/Person.model';
import { Job } from './../models/Job.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataOutputService {
 jobs: Job[] | [];
 jobSelected: Job;
 private popoverMenuJob: Job;

 constructor() { }

  setJobData(jobs: Job[] | []): void {
    console.log('jobs being set', jobs);
    this.jobs = jobs;
  }

  getJobData(): Job[] | [] {
    return this.jobs;
  }

  setSelectedJob(job: Job): void {
    this.jobSelected = job;
  }

  getSelectedJob(): Job {
    return this.jobSelected;
  }

  getName(): string {
    return localStorage.getItem('user');
  }

  setPopoverMenuJob(job: Job) {
    this.popoverMenuJob = job;
  }

  getPopoverMenuJob(): Job {
    return this.popoverMenuJob;
  }
}
