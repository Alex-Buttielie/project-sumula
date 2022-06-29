import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, finalize, first, tap } from 'rxjs/operators';
import { GenericServices } from 'src/app/shared/service';
import { ConfigService } from 'src/app/shared/service/config.service';
import { LoadingService } from 'src/app/shared/service/loading.service';
import { SnackbarMessageService, TypeSnackMessage } from 'src/app/shared/service/snackbar-message.service';

@Injectable()
export class LoginService extends GenericServices {

  constructor(
    configService: ConfigService,
    private router: Router,
    private http: HttpClient,
    private loadingService: LoadingService,
    private snackBarService: SnackbarMessageService,

  ) { super(configService); }

expiredSectionError(error: any): void {
    this.snackBarService.showSnackBarMessage({
      message: 'Sessão expirou', type: TypeSnackMessage.DANGER
    });
  }

  httpClientError(error: any): void {
    this.snackBarService.showSnackBarMessage({
      message: error, type: TypeSnackMessage.ALERT
    });
  }

  validateLoginSumula(body: any): Observable<Object> {
    this.loadingService.addLoading();
    const credenciaisDTO = {
      email: body.email, 
      password: body.password
    }
    return this.http.post(`${this.url}login`, credenciaisDTO)
      .pipe(finalize(() => this.loadingService.removerLoading()));
  }

  recoveryKey(body: any): Observable<any> {
    this.loadingService.addLoading();

    const emailDTO = {
      email: body.emailRecovery || null
    }

    return this.http.post(`${this.url}auth/forgot`, emailDTO)
      .pipe(first(), delay(1000), tap(result=>console.log(result)));
  }
}
