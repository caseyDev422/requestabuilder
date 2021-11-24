import { Component, OnInit } from '@angular/core';
import { Job } from './../../../../models/Job.model';

@Component({
  selector: 'app-created',
  templateUrl: './created.page.html',
  styleUrls: ['./created.page.scss'],
})
export class CreatedPage implements OnInit {
  createdJobs: Job[];

  constructor() { }

  ngOnInit() {
  }

}
