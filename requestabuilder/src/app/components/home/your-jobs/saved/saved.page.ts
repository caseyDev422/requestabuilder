import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/Job.model';
import { ApiServiceService } from './../../../../services/api-service.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {
  savedJobs: Job[] = null;

  constructor(private api: ApiServiceService) { }

  ngOnInit() {

    this.api.getSavedJobs().subscribe((jobs: Job[]) => {
      console.log(jobs);
      this.savedJobs = jobs;
    })
  }

}
