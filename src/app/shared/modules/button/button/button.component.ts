import { ChangeDetectionStrategy, Component } from '@angular/core';

// README: Angular remove no use import in bundle
import { PEOPLE_CONFIGS } from '../../../../config';
@Component({
  selector: 'app-button',
  // template: '',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  peoples: any = [];
  constructor() {
    // this.peoples = PEOPLE_CONFIGS;
    // this.loadData();
  }

  // loadData(): void {
    // this.peoples = PEOPLE_CONFIGS;
  // }


  // README: Angular bundle can't remove no use method in side component
  public logData(): void {
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
    console.log('Anything');
  }
}
