import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  public like_btn = {
    color: 'black',
    nome_do_icone: 'heart-outline'
  }
  public data_modal = {};

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.data_modal = { // obtendo dados da pag. anterior
      id: this.navParams.get('id'),
      usuario: this.navParams.get('usuario'),
      perfil_do_usuario: this.navParams.get('perfil_do_usuario'),
      imagem_postada: this.navParams.get('imagem_postada')
    };
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  like() {
    if (this.like_btn.nome_do_icone === 'heart-outline') {
      this.like_btn.nome_do_icone = 'heart';
      this.like_btn.color = 'danger';
    }
    else {
      this.like_btn.nome_do_icone = 'heart-outline';
      this.like_btn.color = 'black';
    }
  }
  goUserPerfil(userId: number) {
    console.log("id" + userId);
  }

}
