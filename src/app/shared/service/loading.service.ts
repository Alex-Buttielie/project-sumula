import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private contador = 0;

  changeLoadingEvent = new EventEmitter();

  constructor() { }

  addLoading(): void {
    this.contador++;
    this.changeLoadingEvent.emit(true);
  }

  removerLoading(): void {
    if (this.contador > 0) {
      this.contador--;
    }

    if (this.contador <= 0) {
      this.changeLoadingEvent.emit(false);
    }
  }
}
