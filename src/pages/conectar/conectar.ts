import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
@Component({
	selector: 'page-conectar',
	templateUrl: 'conectar.html'
})
export class ConectarPage {

	txtServidor: String;

	constructor(public navCtrl: NavController) {
		this.txtServidor = "holiwis";
	}

}
