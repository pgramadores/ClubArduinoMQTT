import { Component } from '@angular/core';

import { ConectarPage } from '../conectar/conectar';
import { SuscribirPage } from '../suscribir/suscribir';
import { AvanzadoPage } from '../avanzado/avanzado';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ConectarPage;
  tab2Root = SuscribirPage;
  tab3Root = AvanzadoPage;

  constructor() {

  }
}
