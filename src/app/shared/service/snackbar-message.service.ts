import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


export enum TypeSnackMessage {
  SUCCESS, ALERT, DANGER, INFO
}

export interface ParametroSnackbar {
  message: string;
  type: TypeSnackMessage;
}

@Injectable({
  providedIn: 'root'
})
export class SnackbarMessageService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private snackBar: MatSnackBar) { }

  showSnackBarMessage(parametro: ParametroSnackbar): void {
    this.snackBar.open(parametro.message, '{}', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: [`snackbar-${this.typeMessage(parametro.type)}`]
    });
  }

  typeMessage(type: TypeSnackMessage): string {
    let typeMessage;
    switch (type) {
      case TypeSnackMessage.ALERT:
        typeMessage = 'warn';
        break;
      case TypeSnackMessage.SUCCESS:
        typeMessage = 'success';
        break;
      case TypeSnackMessage.DANGER:
        typeMessage = 'danger';
        break;
      case TypeSnackMessage.INFO:
        typeMessage = 'info';
        break;
    }

    return typeMessage;
  }
}
