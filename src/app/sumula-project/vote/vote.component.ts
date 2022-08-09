import { Component, OnInit } from '@angular/core';

export class Player {
  name!: string;
  celular!: string;
  email!: string;
  qntEstrelas!: number;
  idade!: number;
  position!: string;
  numberList!: number;
  caminhofoto!: string;
  surname!: string;
}


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  logo!: any;
  player : Player  = new Player();

  star1 = '../../assets/star0.png';
  star2 = '../../assets/star0.png';
  star3 = '../../assets/star0.png';
  star4 = '../../assets/star0.png';
  star5 = '../../assets/star0.png';

  constructor() { this.logo = '../../assets/ESCUDO.png'; }

  ngOnInit(): void {

    this.player.name ='Alex Buttielie';
    this.player.surname = 'Leleco';
    this.player.celular = '(62)999429-1748';
    this.player.position = 'Meia';
    this.player.qntEstrelas = 5; 
    this.player.idade =  21; 
    this.player.email = 'buttielle3@gmail.com';
    this.player.numberList = 1;
    this.player.caminhofoto = '../../assets/alex.png'
  }


  next() {

  }

  previous() {

  }

  avaliar(star: any) {
    const starName = "star";
    let contador = 0;

    while (contador < star) {
      contador++;
      const variableName = starName + contador;

      if (variableName == 'star1') {
        if (this.star1 == '../../assets/star0.png') {
          this.star1 = '../../assets/star1.png';
        } else {
          this.star1 = '../../assets/star1.png';
          this.star2 = '../../assets/star0.png';
          this.star3 = '../../assets/star0.png';
          this.star4 = '../../assets/star0.png';
          this.star5 = '../../assets/star0.png';
        }
      } else if (variableName == 'star2') {
        if (this.star2 == '../../assets/star0.png') {
          this.star1 = '../../assets/star1.png';
          this.star2 = '../../assets/star1.png';
        } else {
          this.star1 = '../../assets/star0.png';
          this.star2 = '../../assets/star0.png';
          this.star3 = '../../assets/star0.png';
          this.star4 = '../../assets/star0.png';
          this.star5 = '../../assets/star0.png';
        }
      } else if (variableName == 'star3') {
        if (this.star3 == '../../assets/star0.png') {
          this.star1 = '../../assets/star1.png';
          this.star2 = '../../assets/star1.png';
          this.star3 = '../../assets/star1.png';
        } else {
          this.star1 = '../../assets/star0.png';
          this.star2 = '../../assets/star0.png';
          this.star3 = '../../assets/star0.png';
          this.star4 = '../../assets/star0.png';
          this.star5 = '../../assets/star0.png';
        }
      } else if (variableName == 'star4') {
        if (this.star4 == '../../assets/star0.png') {
          this.star1 = '../../assets/star1.png';
          this.star2 = '../../assets/star1.png';
          this.star3 = '../../assets/star1.png';
          this.star4 = '../../assets/star1.png';
        } else {
          this.star1 = '../../assets/star0.png';
          this.star2 = '../../assets/star0.png';
          this.star3 = '../../assets/star0.png';
          this.star4 = '../../assets/star0.png';
          this.star5 = '../../assets/star0.png';
        }
      } else if (variableName == 'star5') {
        if (this.star5 == '../../assets/star0.png') {
          this.star1 = '../../assets/star1.png';
          this.star2 = '../../assets/star1.png';
          this.star3 = '../../assets/star1.png';
          this.star4 = '../../assets/star1.png';
          this.star5 = '../../assets/star1.png';
        } else {
          this.star1 = '../../assets/star0.png';
          this.star2 = '../../assets/star0.png';
          this.star3 = '../../assets/star0.png';
          this.star4 = '../../assets/star0.png';
          this.star5 = '../../assets/star0.png';
        }
      }

    }
  }
}
