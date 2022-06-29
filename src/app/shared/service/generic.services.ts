import { HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';

export abstract class GenericServices {

    abstract expiredSectionError(error: any): void;
    abstract httpClientError(error: any): void;

    constructor(private configService: ConfigService){}

    get url(): string {
      //  return this.configService.url;
      return 'http://localhost:8085/'
    }

    get header(): HttpHeaders {
        return new HttpHeaders();
    }

    addToken(token: any): HttpHeaders {
        return this.header.set('x-auth-token', token);
    }

    handleError(error: any): any {
        if (error?.error?.status === 'SYSTEM_SESSAO_EXP') {
            this.expiredSectionError(error);
        } else if (error?.error) {
            this.httpClientError(error?.error?.errors);
        }

        return error;
    }

}
