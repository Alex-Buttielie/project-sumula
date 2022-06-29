import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { GenericServices } from 'src/app/shared/service';
import { ConfigService } from 'src/app/shared/service/config.service';
import { LoadingService } from 'src/app/shared/service/loading.service';
import { SnackbarMessageService, TypeSnackMessage } from 'src/app/shared/service/snackbar-message.service';
import { AuthUserService } from './auth-user.service';

@Injectable()
export class SumulaService extends GenericServices {

  constructor(
    configService: ConfigService,
    private router: Router,
    private http: HttpClient,
    private auth: AuthUserService,
    private loadingService: LoadingService,
    private snackBarService: SnackbarMessageService
  ) { super(configService); }

  expiredSectionError(error: any): void {
    this.snackBarService.showSnackBarMessage({
      message: 'Sessão expirou', type: TypeSnackMessage.DANGER
    });

    this.router.navigate(['sumula-project']);
  }

  httpClientError(error: any): void {
    this.snackBarService.showSnackBarMessage({
      message: error, type: TypeSnackMessage.ALERT
    });
  }
  
}
