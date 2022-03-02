import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/Job.model';
import { ApiServiceService } from './../../../../services/api-service.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss'],
})
export class CompletedPage implements OnInit {

  constructor( private api: ApiServiceService) { }
    completedJobs: Job[];

  ngOnInit() {
    this.api.getCompletedJobs().subscribe(jobs => {
      console.log('jobs', jobs);
      this.completedJobs = jobs;

    })

  }

}
