import { Component, Input, OnInit,  } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Player {
  name: string;
  celular: string;
  email: string;
  qntEstrelas: number;
  idade: number;
  position: string;
}


@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {

  logo!: any;

  dataSource$: Player [] = [
    {name: 'Alex Buttielie',celular: '(62)999429-1748', position: 'Meia', qntEstrelas: 5, idade: 21, email: 'buttielle3@gmail.com'}
  ];

  displayedColumns = ['name', 'celular', 'email', 'position', 'qntEstrelas', 'idade'];
  
  constructor() {
   // if (environment.production) {
   //   this.logo = '/project-sumula/assets/ESCUDO.png';
   // } else {
      this.logo = '../../assets/ESCUDO.png';
   // }
   }

  ngOnInit(): void {
  }

}


