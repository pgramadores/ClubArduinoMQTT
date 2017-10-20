import { Component } from '@angular/core';

import { ConectarPage } from '../conectar/conectar';
import { EstadisticasPage } from '../estadisticas/estadisticas';
import { NosotrosPage } from '../nosotros/nosotros';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ConectarPage;
  tab2Root = EstadisticasPage;
  tab3Root = NosotrosPage;

  constructor() {

  }
}
