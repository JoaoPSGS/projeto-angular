import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'new-user',
    loadChildren: () => import('./pages/new-user/new-user.module').then( m => m.NewUserPageModule)
  },
  {
    path: 'editar-cadastro',
    loadChildren: () => import('./pages/editar-cadastro/editar-cadastro.module').then( m => m.EditarCadastroPageModule)
  },
  {
    path: 'criando-projeto',
    loadChildren: () => import('./pages/criando-projeto/criando-projeto.module').then( m => m.CriandoProjetoPageModule)
  },
  {
    path: 'home-adm',
    loadChildren: () => import('./pages/home-adm/home-adm.module').then( m => m.HomeAdmPageModule)
  },
  {
    path: 'sugestao',
    loadChildren: () => import('./pages/sugestao/sugestao.module').then( m => m.SugestaoPageModule)
  },
  {
    path: 'usuarios-adm',
    loadChildren: () => import('./pages/usuarios-adm/usuarios-adm.module').then( m => m.UsuariosAdmPageModule)
  },
  {
    path: 'sugestoes-adm',
    loadChildren: () => import('./pages/sugestoes-adm/sugestoes-adm.module').then( m => m.SugestoesAdmPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
