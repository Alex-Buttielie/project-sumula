import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoadingService } from './shared/service';
import { ConfigService } from './shared/service/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-sumula';
  loading: any;
  spinnerGif: any;
  logo: any;
  fundo: any;
  dadosEmpresa: any;

  constructor(
    loadingService: LoadingService,
    configService: ConfigService,
    private http: HttpClient
  ) {

    this.activeChangeLoadingEvent(loadingService);
    this.loadVersionConfig(configService);
  }

  private loadingDataEnterprise(): void {
    this.dadosEmpresa = 'Sumula'
  }

  private start(): void {
    this.loadingDataEnterprise();
    this.sourceLogo();
  }

  private sourceLogo(): void {

    //if (environment.production) {
    //  this.spinnerGif = '/le-fashion-front/assets/spinner.gif';
    //  this.logo = '/clothing-store/assets/LOGOMARCA-PRINCIPAL.png';
    //  this.fundo = '/clothing-store/assets/LOGO-SEM-FUNDO.png';
    //} else {

      this.logo = '/project-sumula/assets/ESCUDO.png';
      this.spinnerGif = '../assets/ESCUDO.png';
      this.logo = '../../assets/ESCUDO.png';
      this.fundo = '../../assets/ESCUDO.png';
    //}
  }


  private activeChangeLoadingEvent(loadingService: LoadingService): void {
    loadingService.changeLoadingEvent
      .subscribe(event => {
        if (event) {
          setTimeout(() => this.loading = event);
        } else {
          setTimeout(() => this.loading = event, 500);
        }
      });
  }

  private loadVersionConfig(configService: ConfigService): void {
    this.http.get<any>('./assets/versao.json').subscribe(result => {
      if (result && result.url) {
        configService.url = result?.url;

        this.start();
      }
    });
  }

}
