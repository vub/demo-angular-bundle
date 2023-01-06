import { Component } from '@angular/core';
import { PEOPLE_CONFIGS } from 'src/app/config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  peoples = PEOPLE_CONFIGS;
  constructor() {

  }

}
