import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { MeuStorageService } from 'src/app/util/meu-storage.service';

@Component({
  selector: 'app-sugestao',
  templateUrl: './sugestao.page.html',
  styleUrls: ['./sugestao.page.scss'],
})
export class SugestaoPage implements OnInit {
  Sugestao        : any;
  listaDeSugestoes: Array<any>;
  titulo          : string;

  constructor(private mensagens : AlertController,
              private navegar   : NavController,
              private meustorage: MeuStorageService) { 

                this.titulo = "inclusao";
                
                if (this.Sugestao != null){
                  this.titulo = "alteracao";
                }

                if (this.Sugestao == null){
                  this.Sugestao = {};
                }
              }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.meustorage.GetUsuarios("sugestoes").then(sugestoes => {
      this.listaDeSugestoes = sugestoes;
    });
  }

  btn_enviar(){
    if(this.Sugestao.comentario == null || this.Sugestao.comentario == ""){
      this.presentAlert("Comentário Vazio");
      return;
    }
    if(this.Sugestao.usuario == null || this.Sugestao.usuario == ""){
      this.presentAlert("Usuário Vazio");
      return;
    }

    // campo que indica ao service qual operação vai ser realizada
    this.Sugestao.acao = this.titulo;

    // gera id automaticamente
    if(this.listaDeSugestoes == null){
      this.Sugestao.id = 1;
    }else {
      this.Sugestao.id = this.listaDeSugestoes.length + 1;
    }
    this.meustorage.SalvarUsuario("sugestoes", this.Sugestao).then(() => {
      this.navegar.pop();
    });

    this.presentAlert("Sugestão Enviada!");
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
