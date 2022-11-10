import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class MeuStorageService {

  key_usuarios: string = "usuarios";

  constructor(private storage: Storage) { 
    
  }

  // SetId(){
  //   this.storage.set("indice-id", 1);
  // }

  GetId(){
    return this.storage.get("indice-id").then(id => {
      return Promise.resolve(id);
    });
  }

  GetUsuarios(){
    return this.storage.get(this.key_usuarios).then(usuarios => {
      return Promise.resolve(usuarios);
    });
  }

  SalvarTodosUsuarios(usuarios: any){
    return this.storage.set(this.key_usuarios, usuarios).then(() => {
      return Promise.resolve();
    });
  }

  SalvarUsuario(usuario:any){
    return this.GetUsuarios().then(usuarios =>{
      
      switch(usuario.acao)
      {
        case "alteracao":
          for (let i=0; i<usuario.length;i++){
            if (usuarios[i].id == usuario.id){
              delete usuario.acao;
              usuarios[i] = usuario;
              break;
            }
          }
          break;
        case "exclusao":
          for (let i=0; i<usuarios.length;i++){
            if (usuarios[i].id == usuario.id){
              usuario.splice(i,1);
              // usuarios[i] = usuario;
              break;
            }
          }
          break;
        default:
          delete usuario.acao;
          if(usuarios == null || usuarios == "" || usuarios == undefined){
            usuarios = [];
          }
          usuarios.push(usuario);
          break;
      }

      this.SalvarTodosUsuarios(usuarios);

      return Promise.resolve();
    });
  }
}
