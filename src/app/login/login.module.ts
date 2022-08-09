import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CoreModule } from 'src/app/core/core.module';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login.component';
import { AuthUserService, SumulaGuardService, SumulaService, LoginService } from '../sumula-project/service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule, 
    LoginRoutingModule
  ],  providers: [
    AuthUserService,
    SumulaGuardService,
    SumulaService,
    LoginService
  ]
})
export class LoginModule { }
