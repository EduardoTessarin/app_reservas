import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    children:[
      {
        path: 'conta',
        loadChildren: () => import('./conta/conta.module').then( m => m.ContaPageModule)
      },

      {
        path: 'calendario',
        loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
      },

      {
        path: 'agendamento',
        loadChildren: () => import('./agendamento/agendamento.module').then( m => m.AgendamentoPageModule)
      },
      
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
    ]
  },
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
