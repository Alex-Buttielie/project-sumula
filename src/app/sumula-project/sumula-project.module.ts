import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SumulaProjectRoutingModule } from './sumula-project-routing.module';
import { CoreModule } from '../core/core.module';
import { SumulaProjectComponent } from './sumula-project.component';
import { AuthUserService, LoginService, SumulaGuardService } from './service';
import { SumulaService } from './service/sumula-service';
import { PlayerRegistrationComponent } from './player-registration/player-registration.component';


@NgModule({
  declarations: [SumulaProjectComponent, PlayerRegistrationComponent],
  imports: [
    CommonModule,
    SumulaProjectRoutingModule, 
    CoreModule,
  ], providers: [
    AuthUserService,
    SumulaGuardService,
    SumulaService,
    LoginService
  ]
})
export class SumulaProjectModule { }
