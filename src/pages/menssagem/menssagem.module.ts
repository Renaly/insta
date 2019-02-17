import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenssagemPage } from './menssagem';

@NgModule({
  declarations: [
    MenssagemPage,
  ],
  imports: [
    IonicPageModule.forChild(MenssagemPage),
  ],
})
export class MenssagemPageModule {}
