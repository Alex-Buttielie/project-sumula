import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from './config.service';
import { GenericServices } from './generic.services';
import { SnackbarMessageService, TypeSnackMessage } from './snackbar-message.service';

@Injectable({
  providedIn: 'root'
})
export class ParamService extends GenericServices {

  constructor(
    configService: ConfigService,
    private http: HttpClient,
    private snackBarService: SnackbarMessageService
  ) { super(configService); }

  expiredSectionError(error: any): void {
    throw new Error('Method not implemented.');
  }

  httpClientError(error: any): void {
    this.snackBarService.showSnackBarMessage({
      message: error, type: TypeSnackMessage.ALERT
    });
  }

  getDadosDaEmpresaParaLogin(): Observable<any> {
    const url = `${this.url}/paramController/getDadosDaEmpresaParaLogin`;
    return this.http.get<any>(url).pipe(map(result => this.dadosEmpresa = result));
  }

  get dadosEmpresa(): any {
    return JSON.parse(localStorage.getItem('EMPRESA')!);
  }

  set dadosEmpresa(value) {
    localStorage.setItem('EMPRESA', JSON.stringify(value));
  }

}
