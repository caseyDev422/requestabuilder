import { Component, OnInit } from '@angular/core';
import { Job } from './../../../../models/Job.model';
import { ApiServiceService } from './../../../../services/api-service.service';

@Component({
  selector: 'app-created',
  templateUrl: './created.page.html',
  styleUrls: ['./created.page.scss'],
})
export class CreatedPage implements OnInit {
  createdJobs: Job[];

  constructor(private api: ApiServiceService) { }

  ngOnInit() {
    this.api.getCreatedJobs().subscribe((jobs: Job[]) => {
      this.createdJobs = jobs;
    });
  }

}
