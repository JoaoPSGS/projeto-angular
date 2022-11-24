import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class MeuStorageService {

  key_usuarios: string = "usuarios";

  constructor(private storage: Storage) { 
    
  }

  GetId(){
    return this.storage.get("indice-id").then(id => {
      return Promise.resolve(id);
    });
  }

  GetUsuarios(key: any){
    return this.storage.get(key).then(usuarios => {
      return Promise.resolve(usuarios);
    });
  }

  SalvarTodosUsuarios(key: any, usuarios: any){
    return this.storage.set(key, usuarios).then(() => {
      return Promise.resolve();
    });
  }

  SalvarUsuario(key: any, usuario:any){
    return this.GetUsuarios(key).then(usuarios =>{
      
      switch(usuario.acao)
      {
        case "alteracao":
          for (let i=0; i<usuarios.length;i++){
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
              usuarios.splice(i,1);
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

      this.SalvarTodosUsuarios(key, usuarios);

      return Promise.resolve();
    });
  }
}
