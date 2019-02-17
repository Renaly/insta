import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the EdtPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edt-perfil',
  templateUrl: 'edt-perfil.html',
})
export class EdtPerfilPage {

  public dados_do_usuario = {
    perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
    nome_sobrenome: 'Renaly Barbosa 🌈',
    usuario: 'naly.ry',
    website: 'https://www.facebook.com/renaly.barbosa.12',
    descricao: 'Campina Grande || PB || 18y || SI - facisa 📚',
    email: 'renaly2000lilika@gmail.com',
    telefone: '999999999',
    genero: 'Feminino'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, public loadingCtrl : LoadingController) {
  }
//  dismiss - Dispensar o viewController atual
  dismiss(){
    this.viewCtrl.dismiss();
  }

  atualizarPerfil(){
    let carregar = this.loadingCtrl.create({
      duration : 200
    });
    carregar.present().then( () => this.navCtrl.pop() ); //Volte para a página do perfil, Você deve fazer isso depois de obter os dados da API
  }

}
