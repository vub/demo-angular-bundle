import { Component } from '@angular/core';
import { PEOPLE_CONFIGS } from '../../../../config';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  peoples: any = [];
  constructor() {
    this.peoples = PEOPLE_CONFIGS;
  }
}
