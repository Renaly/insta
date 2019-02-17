import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerfilSalvoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil-salvo',
  templateUrl: 'perfil-salvo.html',
})
export class PerfilSalvoPage {

  public imagens = [
    {
      id: 1,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/f243dc0dc4be3db69dcfe367820e9109/5CF32C3E/t51.2885-15/e35/20766535_109369893111048_1987360657250451456_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 2,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/23eceae3dbbc935eb0a9c7a834e9e61e/5CDE86C1/t51.2885-15/sh0.08/e35/s750x750/17333528_572776239591542_7044954178963111936_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
