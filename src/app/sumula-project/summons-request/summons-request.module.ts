import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummonsRequestRoutingModule } from './summons-request-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CoreModule } from 'src/app/core/core.module';
import { SummonsRequestComponent } from './summons-request.component';


@NgModule({
  declarations: [SummonsRequestComponent],
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
    SummonsRequestRoutingModule
  ]
})
export class SummonsRequestModule { }
