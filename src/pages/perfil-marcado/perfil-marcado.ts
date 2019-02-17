import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-perfil-marcado',
  templateUrl: 'perfil-marcado.html',
})
export class PerfilMarcadoPage {

  public imagens = [
    {
      id: 1,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/5a031925591707edac59136e33818416/5D0003D7/t51.2885-15/sh0.08/e35/p640x640/43779156_716385318726873_604042457488246984_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 2,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/1f912e618dc62a8d4ccb8f85c01e9db5/5CDEC385/t51.2885-15/sh0.08/e35/s640x640/47353523_581672312275644_8862751479815743717_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 3,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/8b783868d111c9a6463de805391c74b7/5CDC2302/t51.2885-15/e35/44260934_2095803047397874_4884408858553169193_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 4,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 5,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/5611bc2bcfd47a39aa1efa137c30661a/5CDFC525/t51.2885-15/e35/12519367_115820425483869_502692806_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    }
    
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
