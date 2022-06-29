import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BotaoMenuComponent } from './botao-menu.component';

@NgModule({
  declarations: [BotaoMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [BotaoMenuComponent]
})
export class BotaoMenuModule { }
