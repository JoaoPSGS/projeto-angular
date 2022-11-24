import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { MeuStorageService } from '../../util/meu-storage.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-editar-cadastro',
  templateUrl: './editar-cadastro.page.html',
  styleUrls: ['./editar-cadastro.page.scss'],
})
export class EditarCadastroPage implements OnInit {
  passwordToggleIconOld = 'eye' ;
  showPasswordOld       = false;

  passwordToggleIcon = 'eye' ;
  showPassword       = false;

  listaDeUsuarios: Array<any>;
  Usuario        : any;
  titulo         : string;

  login     : any;
  senhaAtual: any;
  senhaNova : any;

  constructor(private mensagens : AlertController,
              private navegar   : NavController,
              private meustorage: MeuStorageService,
              private storage: Storage) { 
                this.titulo = "inclusao";
                
                if (this.Usuario != null){
                  this.titulo = "alteracao";
                }

                if (this.Usuario == null){
                  this.Usuario = {};
                }
                console.log(this.listaDeUsuarios)
              }

  ngOnInit() {
  }

  async ionViewWillEnter(){
   await this.storage.get("usuario_logado").then(usuario_log => 
      this.listaDeUsuarios = usuario_log
    );
  }

  ionViewDidEnter(){
    this.login = this.listaDeUsuarios[0].login;
  }

  togglePassword():void {
    this.showPassword = !this.showPassword;

    if (this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }

  togglePassword1():void {
    this.showPasswordOld = !this.showPasswordOld;

    if (this.passwordToggleIconOld == 'eye') {
      this.passwordToggleIconOld = 'eye-off';
    } else {
      this.passwordToggleIconOld = 'eye';
    }
  }

  btn_salvar(){

  }

}
