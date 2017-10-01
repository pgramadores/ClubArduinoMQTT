import { Component } from '@angular/core';

import { SuscribirPage } from '../suscribir/suscribir';
import { PublicarPage } from '../publicar/publicar';
import { ConectarPage } from '../conectar/conectar';
import { EstadisticasPage } from '../estadisticas/estadisticas';
import { NosotrosPage } from '../nosotros/nosotros';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ConectarPage;
  tab2Root = SuscribirPage;
  tab3Root = PublicarPage;
  tab4Root = EstadisticasPage;
  tab5Root = NosotrosPage;

  constructor() {

  }
}
