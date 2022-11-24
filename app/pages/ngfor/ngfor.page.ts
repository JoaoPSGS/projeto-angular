import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.page.html',
  styleUrls: ['./ngfor.page.scss'],
})
export class NgforPage implements OnInit {

  qtd_card   : number;
  listaDeCard: any = [];

  constructor(private mensagens : AlertController) { }

  ngOnInit() {
  }

  enviar(){
    this.listaDeCard = [];
    for(let i = 0; i < this.qtd_card; i++){
      let aux = i+1
      this.listaDeCard[i] = "Card: "+aux;
    }
  }

}
