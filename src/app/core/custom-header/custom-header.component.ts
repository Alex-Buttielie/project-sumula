import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomHeaderComponent implements OnInit {

  logo;

  
  @Input() titulo!: string;
  @Input() dadosEmpresa!: any;
  @Input() cor: any;

  constructor() {

    if (environment.production) {
      this.logo = '/clothing-store/assets/LOGO-FUNDO-TRANSPARENTE.png';
    } else {
      this.logo = '../../assets/LOGO-FUNDO-TRANSPARENTE.png';
    }
  }

  ngOnInit(): void {
  }

}
