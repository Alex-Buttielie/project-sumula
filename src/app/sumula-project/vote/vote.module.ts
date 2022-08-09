import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoteRoutingModule } from './vote-routing.module';
import { VoteComponent } from './vote.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    VoteComponent
  ],
  imports: [
    CommonModule,
    VoteRoutingModule, 
    CoreModule
  ]
})
export class VoteModule { }
