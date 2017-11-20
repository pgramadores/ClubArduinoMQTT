import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Paho } from 'ng2-mqtt/mqttws31';
import * as moment from 'moment';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'page-conectar',
	templateUrl: 'conectar.html'
})

export class ConectarPage {

	client: any;

	txtServidor: string = 'mqtt.clubarduino.cl';
	txtPuerto: number = 9001;
	btnConectar: string = "Conectar";
	txtTopico: string = "Raicerk/Luz";
	MensajesRecibidos: any = [];

	constructor(public navCtrl: NavController, private storage: Storage) {
	}


	ConectarMQTT() {

		this.client = new Paho.MQTT.Client(this.txtServidor, this.txtPuerto, '');
		this.onMessage();
		this.onConnectionLost();
		this.client.connect({
			onSuccess: this.onConnected.bind(this)
		});

		if (this.btnConectar == "Desconectar") {
			this.btnConectar = "Conectar";
		}

		this.storage.set('Servidor', this.txtServidor);
		this.storage.set('Puerto', this.txtPuerto);

	}

	onConnected(element) {
		this.client.subscribe(this.txtTopico);
		this.btnConectar = "Desconectar";
		this.sendMessage("Bienvenido al server mqtt de Club Arduino");
		this.storage.set('Topico', this.txtTopico);
	}

	sendMessage(message: string) {
		let packet = new Paho.MQTT.Message(message);
		packet.destinationName = this.txtTopico;
		this.client.send(packet);
	}

	onMessage() {
		
		this.client.onMessageArrived = (message: Paho.MQTT.Message) => {

			let now = moment();

			this.MensajesRecibidos.push({
				fecha: now.format("DD-MM-YYYY H:mm:ss"),
				mensaje: message.payloadString
			});
		};
	}

	onConnectionLost() {
		this.client.onConnectionLost = (responseObject: Object) => {
			console.log('Connection lost : ' + JSON.stringify(responseObject));
		};
	}

}
