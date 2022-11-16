import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.page.html',
  styleUrls: ['./home-adm.page.scss'],
})
export class HomeAdmPage implements OnInit {

  constructor(private navegar: NavController) { }

  ngOnInit() {
  }

  redirecionar(pagina: string,){
    this.navegar.navigateForward(pagina)
  }

}
