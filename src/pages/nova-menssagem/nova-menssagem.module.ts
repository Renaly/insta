import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovaMenssagemPage } from './nova-menssagem';

@NgModule({
  declarations: [
    NovaMenssagemPage,
  ],
  imports: [
    IonicPageModule.forChild(NovaMenssagemPage),
  ],
})
export class NovaMenssagemPageModule {}
