import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';

@IonicPage()
@Component({
  selector: 'page-cadastro-principal',
  templateUrl: 'cadastro-principal.html',
})
export class CadastroPrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPrincipalPage');
  }

  goCadastroPrincipal(){
    this.navCtrl.push(CadastroPage);
  }

}
