import { CommonModule } from '@angular/common';
import { NgModule, } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomInputDateComponent } from './custom-input-date/custom-input-date.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CustomTextareaComponent } from './custom-textarea/custom-textarea.component';
import { CustomSeparatorComponent } from './custom-separator/custom-separator.component';
import { NgxMaskModule } from 'ngx-mask';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SucessDialogComponent } from './sucess-dialog/sucess-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CustomInputDateComponent,
    CustomInputComponent,
    CustomTextareaComponent,
    CustomSeparatorComponent,
    CustomHeaderComponent, 
    LoadingSpinnerComponent,
    SucessDialogComponent,
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatCardModule,
    NgxMaskModule.forRoot(),
    MatDialogModule,
    MatAutocompleteModule, 
    MatTableModule,
    MatRadioModule, 
    MatToolbarModule, 
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatIconModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatCardModule,
    NgxMaskModule,
    MatProgressSpinnerModule,
    CustomInputDateComponent,
    CustomInputComponent,
    CustomTextareaComponent,
    CustomSeparatorComponent,
    CustomHeaderComponent,
    LoadingSpinnerComponent,
    MatDialogModule,
    SucessDialogComponent, 
    ErrorDialogComponent,
    MatAutocompleteModule, 
    MatTableModule,
    MatRadioModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatSelectModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatIconModule
  ]
})
export class CoreModule { }
