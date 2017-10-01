import { Component } from '@angular/core';

import { SuscribirPage } from '../suscribir/suscribir';
import { ContactPage } from '../contact/contact';
import { ConectarPage } from '../conectar/conectar';
import { EstadisticasPage } from '../estadisticas/estadisticas';
import { NosotrosPage } from '../nosotros/nosotros';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ConectarPage;
  tab2Root = SuscribirPage;
  tab3Root = ContactPage;
  tab4Root = EstadisticasPage;
  tab5Root = NosotrosPage;

  constructor() {

  }
}
