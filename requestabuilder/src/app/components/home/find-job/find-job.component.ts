import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.scss'],
})
export class FindJobComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  onChange(e: any): void {
    const milesChosen = e.target.value;
    console.log(milesChosen);
  }

}
