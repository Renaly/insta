import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalheMenssagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-menssagem',
  templateUrl: 'detalhe-menssagem.html',
})
export class DetalheMenssagemPage {

  public remetente : string;
  public imagem_do_perfil : string;
  public ultima_mensagem : string;
  public enviar_como_icone : boolean = false;
  public like_botao_visivel : boolean = false;

  public menssagem = []; 
  // Você pode obter todos os detalhes do bate-papo da sua API

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.remetente = this.navParams.get('remetente');
    this.imagem_do_perfil = this.navParams.get('imagem_do_perfil');
    this.ultima_mensagem = this.navParams.get('ultima_mensagem');
  }

  enviarLike(){
    if(this.enviar_como_icone === false) {
      this.enviar_como_icone = true;
    }
    // Permitir efeito de coração
    this.like_botao_visivel = !this.like_botao_visivel;
  }

}
