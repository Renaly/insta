import { Component } from '@angular/core';
import { InicialPage } from '../inicial/inicial';
import { PesquisaPage } from '../pesquisa/pesquisa';
import { NotificacaoPage } from '../notificacao/notificacao';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = InicialPage;
  tab2Root = PesquisaPage;
  // tab3Root = null;
  tab4Root = NotificacaoPage;
  tab5Root = PerfilPage;

  constructor() {
  }
  
}
      
  


