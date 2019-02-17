import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NovaMenssagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nova-menssagem',
  templateUrl: 'nova-menssagem.html',
})
export class NovaMenssagemPage {

  public usuario_verificado : boolean = false;
  public entrada_visivel : boolean = false;

  public amigos = [
    {
      id: 1,
      imagem_do_perfil: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      usuario: 'naly.ry',
    },
    {
      id: 2,
      imagem_do_perfil: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/e9aa57182f719108e730398184d7bc74/5CED183A/t51.2885-15/sh0.08/e35/p640x640/26385567_1490819531016907_5876316615926087680_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net',
      usuario: 'lima.l',
    },
    {
      id: 3,
      imagem_do_perfil: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/1394da8c4f2185235d533ae8cde28a94/5CF8C68E/t51.2885-15/e35/40593288_296766111106914_5531543738351878144_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net',
      usuario: 'snicker_ny',
    },
    {
      id: 4,
      imagem_do_perfil: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c85a18782661056baed34ca13b2b0590/5CED5438/t51.2885-15/e35/45597883_316973259156040_6853705022909311788_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net',
      usuario: 'brennox-ferreira',
    },
    {
      id: 5,
      imagem_do_perfil: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/652e94ae0e209a9506bed651bd90694b/5CF65E2C/t51.2885-15/e35/50844780_349392738997393_2601046909666748283_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net',
      usuario: 'Eros.Eros',
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  checkBox(usuario : string){
    console.log('Usuario: ' + usuario);
    this.entrada_visivel = true;
  }

}
