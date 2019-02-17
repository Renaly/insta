import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, PopoverController, App } from 'ionic-angular';
import { MenssagemPage } from '../menssagem/menssagem';
import { PostarPopover } from './postar-popover';

@IonicPage()
@Component({
  selector: 'page-inicial',
  templateUrl: 'inicial.html',
})
export class InicialPage {
  

  @ViewChild(Content) content: Content;

  public like_btn = {
    color : 'black',
    nome_do_icone: 'heart-outline'
  };

  public tap: number = 0;

  public stories = [
    {
      id: 1,
      img: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      nome_do_usuario: 'naly.ry'
    },
    {
      id: 2,
      img: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/e9aa57182f719108e730398184d7bc74/5CED183A/t51.2885-15/sh0.08/e35/p640x640/26385567_1490819531016907_5876316615926087680_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net',
      nome_do_usuario: 'lima.l'
    },
    {
      id: 3,
      img: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/1394da8c4f2185235d533ae8cde28a94/5CF8C68E/t51.2885-15/e35/40593288_296766111106914_5531543738351878144_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net',
      nome_do_usuario: 'snicker_ny'
    },
    {
      id: 4,
      img: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c85a18782661056baed34ca13b2b0590/5CED5438/t51.2885-15/e35/45597883_316973259156040_6853705022909311788_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net',
      nome_do_usuario: 'brennox-ferreira'
    },
    {
      id: 5,
      img: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/652e94ae0e209a9506bed651bd90694b/5CF65E2C/t51.2885-15/e35/50844780_349392738997393_2601046909666748283_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net',
      nome_do_usuario: 'Eros.Eros'
    }

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }
  likeBotao(){
    if(this.like_btn.nome_do_icone === 'heart-outline'){
      this.like_btn.nome_do_icone = 'heart';
      this.like_btn.color = 'danger';
    }
    else{
      this.like_btn.nome_do_icone = 'heart-outline';
      this.like_btn.color = 'black';
    }
  }
  //Se clicar duas vezes, ele será acionado como a postagem
  tapPhotoLike(quantidade){
    this.tap++;
    if(this.tap % 2 === 0){
      this.likeBotao();
    }
  }
  postPopover(){
     let popover = this.popoverCtrl.create(PostarPopover);
     popover.present();
  }
  goMensagens(){
    this.navCtrl.push(MenssagemPage);
  }
  swipePage(evento){
    if(evento.direction === 1){ //Desliza para a esquerda
      console.log("trocar câmera");
    }

    if(evento.direction === 2){//Desliza para a direita
      this.goMensagens();
    }
  }
  role_de_cima(){
    this.content.scrollToTop(); // Rola até o topo do componente
  }

}
