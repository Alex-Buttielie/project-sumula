import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SumulaProjectRoutingModule } from './sumula-project-routing.module';
import { CoreModule } from '../core/core.module';
import { SumulaProjectComponent } from './sumula-project.component';
import { AuthUserService, LoginService, SumulaGuardService } from './service';
import { SumulaService } from './service/sumula-service';
import { MenuComponent } from './menu/menu.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [SumulaProjectComponent],
  imports: [
    CommonModule,
    SumulaProjectRoutingModule, 
    CoreModule, 
    MatSidenavModule, 
    MatDividerModule
  ], providers: [
    AuthUserService,
    SumulaGuardService,
    SumulaService,
    LoginService
  ]
})
export class SumulaProjectModule { }
