import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Paho } from 'ng2-mqtt/mqttws31';

@Component({
  selector: 'page-suscribir',
  templateUrl: 'suscribir.html',
})
export class SuscribirPage {

  client: any;
  txtServidor: string;
  txtPuerto: number;
  txtTopico: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get('Servidor').then((val) => {
      this.txtServidor = val;
    });
    this.storage.get('Puerto').then((val) => {
      this.txtPuerto = val;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuscribirPage');
  }

  Conectar() {
    this.client = new Paho.MQTT.Client(this.txtServidor, this.txtPuerto, '');
    this.client.connect({
      onSuccess: this.onConnected.bind(this)
    });
    this.storage.set('Servidor', this.txtServidor);
    this.storage.set('Puerto', this.txtPuerto);
  }

  onConnected(element) {
    this.client.subscribe(this.txtTopico);
    this.sendMessage("Conectado al topico de iot");
    this.storage.set('Topico', this.txtTopico);
  }

  sendMessage(message: string) {
    let packet = new Paho.MQTT.Message(message);
    packet.destinationName = this.txtTopico;
    this.client.send(packet);
  }

  Enviar(element: any, mensaje: string) {
    this.sendMessage(`P${mensaje}${element.checked ? 'on' : 'off'}`);
  }

}
