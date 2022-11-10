import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navegar: NavController) {}

  redirecionar(pagina: string,){
    this.navegar.navigateForward(pagina)
  }
}
