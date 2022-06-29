import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sumula-project',
    loadChildren: () => import('./sumula-project/sumula-project.module')
      .then(m => m.SumulaProjectModule)
  }, 
  {
    path: '', pathMatch: 'full', redirectTo: 'sumula-project'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
