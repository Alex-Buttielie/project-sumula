import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerRegistrationRoutingModule } from './player-registration-routing.module';
import { PlayerRegistrationComponent } from './player-registration.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoginRoutingModule } from '../login/login-routing.module';


@NgModule({
  declarations: [PlayerRegistrationComponent],
  imports: [
    CommonModule,
    PlayerRegistrationRoutingModule, 
    FormsModule, 
    CoreModule, 
    MatSelectModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatIconModule, 
    LoginRoutingModule 
  ]
})
export class PlayerRegistrationModule { }
