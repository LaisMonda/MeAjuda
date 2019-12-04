import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'myhelp', loadChildren: './myhelp/myhelp.module#MyhelpPageModule' },
  { path: 'otherhelp', loadChildren: './otherhelp/otherhelp.module#OtherhelpPageModule' },
  { path: 'denuncias', loadChildren: './denuncias/denuncias.module#DenunciasPageModule' },
  { path: 'dados', loadChildren: './dados/dados.module#DadosPageModule' },
  { path: 'change-password', loadChildren: './change-password/change-password.module#ChangePasswordPageModule' },
  { path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' },
  { path: 'sos', loadChildren: './sos/sos.module#SosPageModule' },
  { path: 'tiposviolencia', loadChildren: './tiposviolencia/tiposviolencia.module#TiposviolenciaPageModule' },
  { path: 'lei', loadChildren: './lei/lei.module#LeiPageModule' },
  { path: 'processo', loadChildren: './processo/processo.module#ProcessoPageModule' },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
