import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FindJobComponent } from '../find-job/find-job.component';

@Component({
  selector: 'app-see-jobs',
  templateUrl: './see-jobs.component.html',
  styleUrls: ['./see-jobs.component.scss'],
})
export class SeeJobsComponent implements OnInit {

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {}

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: FindJobComponent
    })
    await modal.present();
  }

}
