import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Paho } from 'ng2-mqtt/mqttws31';

@Component({
	selector: 'page-conectar',
	templateUrl: 'conectar.html'
})
export class ConectarPage {

	client: any;

	txtServidor: String;

	constructor(public navCtrl: NavController) {

		this.txtServidor = "holiwis";
		console.log("exito conextando");
		this.client = new Paho.MQTT.Client('iot.eclipse.org', 80, '');
		this.onMessage();
		this.onConnectionLost();
		this.client.connect({ onSuccess: this.onConnected.bind(this) });

	}

	onConnected() {
		console.log("Connected");
		this.client.subscribe("Raicerk/Luz");
		this.sendMessage('holiwis');
	}

	sendMessage(message: string) {
		let packet = new Paho.MQTT.Message(message);
		packet.destinationName = "123456";
		this.client.send(packet);
	}

	onMessage() {
		this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
			console.log('Message arrived : ' + message.payloadString);
		};
	}

	onConnectionLost() {
		this.client.onConnectionLost = (responseObject: Object) => {
			console.log('Connection lost : ' + JSON.stringify(responseObject));
		};
	}

}
