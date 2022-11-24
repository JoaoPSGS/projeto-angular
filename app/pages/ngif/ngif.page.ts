import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.page.html',
  styleUrls: ['./ngif.page.scss'],
})
export class NgifPage implements OnInit {

  inputImg: any;

  constructor(private mensagens : AlertController) { }

  ngOnInit() {
    this.inputImg = "";
  }

  enviar(){
    
  }

}
