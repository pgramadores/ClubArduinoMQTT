import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Paho } from 'ng2-mqtt/mqttws31';

@Component({
  selector: 'page-avanzado',
  templateUrl: 'avanzado.html',
})
export class AvanzadoPage {

  client: any;
  txtServidor: string;
  txtPuerto: number;
  txtPublicaTopico: string;
  txtPublicaMensaje: string;
  txtSuscribeTopico: string;
  txtSuscribeRespuesta: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.conectar();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvanzadoPage');
  }

  async conectar(){
    this.txtServidor = await this.storage.get('Servidor');
    this.txtPuerto = await this.storage.get('Puerto');
    this.client = new Paho.MQTT.Client(this.txtServidor, this.txtPuerto, '');
    this.client.connect({
      onSuccess: function () {
        console.log("Conectado correctamente");
      }
    });
  }

  Enviar() {
    let packet = new Paho.MQTT.Message(this.txtPublicaMensaje);
    packet.destinationName = this.txtPublicaTopico;
    this.client.send(packet);
  }

  Recibir() {
    this.client.subscribe(this.txtSuscribeTopico);
		this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
			this.txtSuscribeRespuesta = message.payloadString;
		};
	}

}
