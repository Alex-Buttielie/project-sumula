import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummonsRequestComponent } from './summons-request.component';

const routes: Routes = [{path: '', component: SummonsRequestComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummonsRequestRoutingModule { }
