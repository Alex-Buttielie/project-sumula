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
  numberList: number;
  caminhofoto: string;
  surname: string;
}


@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {


  logo!: any;
  estrela!: any;

  dataSource$: Player [] = [
    {name: 'Alex Buttielie',surname: 'Leleco', celular: '(62)999429-1748', position: 'Meia', qntEstrelas: 5, idade: 21, email: 'buttielle3@gmail.com', numberList: 1, caminhofoto: '../../assets/alex.png'},
    {name: 'Peterson Macedo',surname: 'Petin', celular: '(62)999429-1748', position: 'Zagueiro', qntEstrelas: 5, idade: 21, email: 'buttielle3@gmail.com', numberList: 2, caminhofoto: '../../assets/petin.png'},
    {name: 'Victor Hugo',surname:'Vitu', celular: '(62)999429-1748', position: 'Lateral Esquero', qntEstrelas: 5, idade: 21, email: 'buttielle3@gmail.com', numberList: 4, caminhofoto: '../../assets/victor.png'},
    {name: 'Juliano', surname: 'Jubs', celular: '(62)999429-1748', position: 'Lateral Direito', qntEstrelas: 5, idade: 21, email: 'buttielle3@gmail.com', numberList: 5, caminhofoto: '../../assets/juliano.png'}
  ];

  displayedColumns = ['name', 'celular', 'email', 'position', 'qntEstrelas', 'idade'];
  
  constructor() {
    if (environment.production) {
      this.logo = '/project-sumula/assets/ESCUDO.png';
      this.estrela = '/project-sumula/assets/estrela.png';
    } else {
      this.logo = '../../assets/ESCUDO.png';
      this.estrela = '../../assets/estrela.png';
      
    }
   }

   getQntEstrelas(player: any){
    let arrayQntEstrelas = Array(player.qntEstrelas);
    return arrayQntEstrelas;

   }

  ngOnInit(): void {
  }

}


