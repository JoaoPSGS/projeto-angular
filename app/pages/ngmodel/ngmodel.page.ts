import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-ngmodel',
  templateUrl: './ngmodel.page.html',
  styleUrls: ['./ngmodel.page.scss'],
})
export class NgmodelPage implements OnInit {

  inputUm  : any;
  inputDois: any;
  inputTres: any;

  constructor(private mensagens : AlertController) { }

  ngOnInit() {
    this.inputUm   = "";
    this.inputDois = "";
    this.inputTres = "";
  }

  enviar(){
    this.inputDois = this.inputUm;
    this.presentAlert("Enviando Input Um ->"+this.inputUm+" para Input Dois ->"+this.inputDois);
  }

  async presentAlert(msg: any) {
    const alert = await this.mensagens.create({
      header: 'Alert',
      message: msg,
      buttons: ['OK'],
    });
  
    await alert.present();
  }

}
