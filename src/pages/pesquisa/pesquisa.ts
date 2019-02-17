import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-pesquisa',
  templateUrl: 'pesquisa.html',
})
export class PesquisaPage {

  public imagens = [ 
    {
      id: 1,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 2,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 3,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
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
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 6,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 7,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 8,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 9,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 10,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 11,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 12,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 13,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 14,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 15,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }
  

  getItens(){
  }


}
