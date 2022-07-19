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
        path: 'convocar',
        loadChildren: () => import('./summons-request/summons-request.module')
          .then(m => m.SummonsRequestModule)
      },
      {
        path: 'convocados',
        loadChildren: () => import('./roster/roster.module')
          .then(m => m.RosterModule)
      },
      {
        path: 'cadastrar-jogador',
        loadChildren: () => import('./player-registration/player-registration.module')
          .then(m => m.PlayerRegistrationModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('./menu/menu.module')
          .then(m => m.MenuModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'menu'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SumulaProjectRoutingModule { }
