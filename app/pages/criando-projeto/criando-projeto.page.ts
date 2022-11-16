import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-criando-projeto',
  templateUrl: './criando-projeto.page.html',
  styleUrls: ['./criando-projeto.page.scss'],
})
export class CriandoProjetoPage implements OnInit {

  constructor(private navegar   : NavController) { }

  ngOnInit() {
  }

  site_vscode(){
    window.location.href = "https://code.visualstudio.com/";
  }

  site_node(){
    window.location.href = "https://nodejs.org/en/download/";
  }

  voltar(){
    this.navegar.pop();
  }

}
