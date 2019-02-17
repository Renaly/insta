import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { NovaMenssagemPage } from '../nova-menssagem/nova-menssagem';
import { DetalheMenssagemPage } from '../detalhe-menssagem/detalhe-menssagem';

@IonicPage()
@Component({
  selector: 'page-menssagem',
  templateUrl: 'menssagem.html',
})
export class MenssagemPage {

  public mensagens = [
    {
      id: 1,
      imagem_do_perfil: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      remetente: 'naly.ry',
      ultima_mensagem: 'Bora comer?',
      time: '1h'
    },
    {
      id: 2,
      imagem_do_perfil: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/e9aa57182f719108e730398184d7bc74/5CED183A/t51.2885-15/sh0.08/e35/p640x640/26385567_1490819531016907_5876316615926087680_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net',
      remetente: 'lima.l',
      ultima_mensagem: 'Pastel de Flango é Bom!!',
      time: '2h'
    },
    {
      id: 3,
      imagem_do_perfil: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/1394da8c4f2185235d533ae8cde28a94/5CF8C68E/t51.2885-15/e35/40593288_296766111106914_5531543738351878144_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net',
      remetente: 'snicker_ny',
      ultima_mensagem: ' Quer que desenho??',
      time: '3h'
    },
    {
      id: 4,
      imagem_do_perfil: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c85a18782661056baed34ca13b2b0590/5CED5438/t51.2885-15/e35/45597883_316973259156040_6853705022909311788_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net',
      remetente: 'brennox-ferreira',
      ultima_mensagem: 'Que hrs sai da faculdade?',
      time: '1h'
    },
    {
      id: 5,
      imagem_do_perfil: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/652e94ae0e209a9506bed651bd90694b/5CF65E2C/t51.2885-15/e35/50844780_349392738997393_2601046909666748283_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net',
      remetente: 'Eros.Eros',
      ultima_mensagem: 'Sua vazia de mente',
      time: '3d'
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  goNovaMensagem(){
    this.app.getRootNav().push(NovaMenssagemPage);
  }

  goMensagem(remetente : string, imagem_do_perfil : string, ultima_mensagem : string ){
    this.app.getActiveNav().push(DetalheMenssagemPage, { rementend: remetente, imagem_do_perfil: imagem_do_perfil, ultima_menssagem: ultima_mensagem});
  }
}
