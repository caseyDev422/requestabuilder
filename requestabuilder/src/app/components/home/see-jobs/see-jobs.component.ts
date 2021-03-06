import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Job } from 'src/app/models/Job.model';
import { FindJobComponent } from '../find-job/find-job.component';
import { ApiServiceService } from './../../../services/api-service.service';
import { DataOutputService } from './../../../services/data-output.service';

@Component({
  selector: 'app-see-jobs',
  templateUrl: './see-jobs.component.html',
  styleUrls: ['./see-jobs.component.scss'],
})
export class SeeJobsComponent implements OnInit {
  allJobs: Job[];

  constructor( 
    private modalCtrl: ModalController, 
    private api: ApiServiceService, 
    private output: DataOutputService
    ) { }

  ngOnInit() {
    this.api.getAllJobs().subscribe((jobs: Job[]) => {
      console.log('JOBS', jobs);
      this.allJobs = jobs;
    })
  }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: FindJobComponent
    })
    await modal.present();
  }

  selectedJob(job: Job) {
    console.log('JOB SELECTED', job);
    this.output.setSelectedJob(job);

  }

  getName(): string {
    return this.output.getName();
  }

}
