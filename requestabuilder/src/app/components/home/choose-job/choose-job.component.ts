import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/Job.model';
import { DataOutputService } from './../../../services/data-output.service';
import { ApiServiceService } from './../../../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-job',
  templateUrl: './choose-job.component.html',
  styleUrls: ['./choose-job.component.scss'],
})
export class ChooseJobComponent implements OnInit {
  jobSelected: Job;

  constructor(private output: DataOutputService, private api: ApiServiceService, private route: Router) { }

  ngOnInit() {
    this.jobSelected = this.output.getSelectedJob();
  }

  claimJob(): void {
    this.jobSelected.claimedJob = true;
    this.api.claimJob(this.jobSelected).subscribe(() => {
      this.route.navigate(['home'])
    });
  }

}
