import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OleoPage } from './oleo';

@NgModule({
  declarations: [
    OleoPage,
  ],
  imports: [
    IonicPageModule.forChild(OleoPage),
  ],
})
export class OleoPageModule {}
