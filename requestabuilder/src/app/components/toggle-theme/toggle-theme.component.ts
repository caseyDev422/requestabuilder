import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss'],
})
export class ToggleThemeComponent {

  constructor() { }

  toggleTheme(event) {
    if(event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');

    } else {
     document.body.setAttribute('color-theme', 'light');
    }

 }

}
