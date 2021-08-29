import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.scss'],
})
export class FindJobComponent implements OnInit {

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {}

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  onChange(e: any): void {
    const milesChosen = e.target.value;
    console.log(milesChosen);
  }

  priceSelect(e: any): void {
    console.log(e.target.value);
  }

  ratingSelect(e: any): void {
    console.log(e.target.value);
  }

}
