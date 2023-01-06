import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// README: If use index.ts
// import { ButtonModule, SelectModule } from './modules';
import { ButtonModule } from './modules/button/button.module';
import { SelectModule } from './modules/select/select.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    SelectModule,
  ],
  exports: [
    ButtonModule,
    SelectModule,
  ]
})
export class SharedModule { }
