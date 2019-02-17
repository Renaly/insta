import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotificacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notificacao',
  templateUrl: 'notificacao.html',
})
export class NotificacaoPage {

  public pagina : string = 'você';

  public notificacao = [
    {

    }
  ];
  public notificacao_sua = [
    {
      id:1
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificacaoPage');
  }

}
