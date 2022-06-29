import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SumulaProjectComponent } from './sumula-project.component';

const routes: Routes = [
  {
    path: '', component: SumulaProjectComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login/login.module')
          .then(m => m.LoginModule)
      },
      {
        path: 'realizar-convocao',
        loadChildren: () => import('./summons-request/summons-request.module')
          .then(m => m.SummonsRequestModule)
      },
      {
        path: 'lista-convocados',
        loadChildren: () => import('./roster/roster.module')
          .then(m => m.RosterModule)
      },
      {
        path: 'cadastro-jogador',
        loadChildren: () => import('./player-registration/player-registration-routing.module')
          .then(m => m.PlayerRegistrationRoutingModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SumulaProjectRoutingModule { }
