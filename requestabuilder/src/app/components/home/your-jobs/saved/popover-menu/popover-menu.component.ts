import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-menu',
  templateUrl: './popover-menu.component.html',
  styleUrls: ['./popover-menu.component.scss'],
})
export class PopoverMenuComponent implements OnInit {
  menuOptions = [
    'Remove job',
    'Give to someone else (WIP)',
    'Back to jobs'
  ]

  constructor( private poc: PopoverController) { }

  ngOnInit() {}

  menuOptionChose(option: string) {
    this.poc.dismiss({
      'fromPopover': option
    });
  }

}
