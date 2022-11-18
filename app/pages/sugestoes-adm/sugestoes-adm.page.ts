import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { MeuStorageService } from 'src/app/util/meu-storage.service';

@Component({
  selector: 'app-sugestoes-adm',
  templateUrl: './sugestoes-adm.page.html',
  styleUrls: ['./sugestoes-adm.page.scss'],
})
export class SugestoesAdmPage implements OnInit {
  listaDeSugestoes: Array<any>;
  Sugestoes       : any;
  titulo          : string;
  constructor(private mensagens : AlertController,
              private navegar   : NavController,
              private meustorage: MeuStorageService) { }

  ngOnInit() {
  }

  reload(){
    this.meustorage.GetUsuarios("sugestoes").then(sugestoes => {
      this.listaDeSugestoes = sugestoes;
    });
  }

  ionViewDidEnter(){
   this.reload();
  }

  excluir_sugestao(sugestao: any){
    this.Sugestoes = sugestao;
    this.presentAlertRemoveArea("Remover Sugestão?");
  }



async presentAlertRemoveArea(msg: string) {
  const alert = await this.mensagens.create({
  header: 'Alert!',
  message: msg,
  buttons: [
    {
      text: 'SIM',
      role: 'confirm',
      handler: () => { 

        this.titulo = "exclusao";
        this.Sugestoes.acao = this.titulo;
        this.meustorage.SalvarUsuario("sugestoes", this.Sugestoes).then(() => {
          this.presentAlert("Sugestão Removida!");
          this.reload();
        });

      },
    },
    {
      text: 'NÃO',
      role: 'cancel',
      handler: () => {
      },
    },
  ],
});

await alert.present();

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
