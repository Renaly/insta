import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheMenssagemPage } from './detalhe-menssagem';

@NgModule({
  declarations: [
    DetalheMenssagemPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheMenssagemPage),
  ],
})
export class DetalheMenssagemPageModule {}
