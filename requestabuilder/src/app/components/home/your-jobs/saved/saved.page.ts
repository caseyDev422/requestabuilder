import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Job } from 'src/app/models/Job.model';
import { ApiServiceService } from './../../../../services/api-service.service';
import { PopoverMenuComponent } from './popover-menu/popover-menu.component';
import { DataOutputService } from './../../../../services/data-output.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {
  savedJobs: Job[] = null;

  constructor(private api: ApiServiceService, private popOverController: PopoverController, private output: DataOutputService) { }

  ngOnInit() {

    this.api.getSavedJobs().subscribe((jobs: Job[]) => {
      console.log(jobs);
      this.savedJobs = jobs;
    })
  }

  async openPopover(job: Job) {
    this.output.setPopoverMenuJob(job);

    const popover = await this.popOverController.create({
      component: PopoverMenuComponent
    });

    popover.onDidDismiss().then((option: any) => {
      // used symbol ? since possible outside click of menu and not using popover menu
      const chosenOption = option?.data?.fromPopover;
      console.log(chosenOption);

      if (chosenOption === 'Remove job') {
        const job = this.output.getPopoverMenuJob();
        console.log('job chosen', job);
        /**
         * implement logic to remove job and set saved to false or delete from job
         */
      }
    })

    return await popover.present();
  }

}
