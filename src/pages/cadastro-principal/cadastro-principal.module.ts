import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPrincipalPage } from './cadastro-principal';

@NgModule({
  declarations: [
    CadastroPrincipalPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPrincipalPage),
  ],
})
export class CadastroPrincipalPageModule {}
