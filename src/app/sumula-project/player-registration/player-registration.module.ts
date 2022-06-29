import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRegistrationRoutingModule } from './player-registration-routing.module';
import { PlayerRegistrationComponent } from './player-registration.component';


@NgModule({
  declarations: [PlayerRegistrationComponent],
  imports: [
    CommonModule,
    PlayerRegistrationRoutingModule
  ]
})
export class PlayerRegistrationModule { }
