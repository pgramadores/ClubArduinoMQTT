import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import {
  MqttMessage,
  MqttModule,
  MqttService
} from 'angular2-mqtt';

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
