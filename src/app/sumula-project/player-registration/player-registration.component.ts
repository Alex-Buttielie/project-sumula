import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.scss']
})
export class PlayerRegistrationComponent implements OnInit {

  @Input() listPositions = [
    { value: 1, description: "GOLEIRO" },
    { value: 1, description: "ZAGUEIRO" },
    { value: 1, description: "LATERAL" },
    { value: 1, description: "VOLANTE" },
    { value: 1, description: "MEIA" },
    { value: 1, description: "PONTA" },
    { value: 1, description: "ATACANTE" },
    { value: 1, description: "ALA" },
    { value: 1, description: "PONTA" }
  ];

  star1 = '../../assets/star0.png';
  star2 = '../../assets/star0.png';
  star3 = '../../assets/star0.png';
  star4 = '../../assets/star0.png';
  star5 = '../../assets/star0.png';
  formGroup!: FormGroup;
  dateCompany!: any;
  soon!: any;

  constructor(
    formBuilder: FormBuilder
  ) {
    this.builderForms(formBuilder)
    this.soon = '../../assets/ESCUDO.png';
  }

  private builderForms(formBuilder: FormBuilder): void {
    this.formGroup = formBuilder.group({
      name: [],
      nickname: [],
      birth: [],
      fone: [],
      email: [],
      position: [],
    });

    this.formGroup.get('name');
    this.formGroup.get('nickname');
    this.formGroup.get('birth');
    this.formGroup.get('fone');
    this.formGroup.get('email');
    this.formGroup.get('position');
  }

  ngOnInit(): void {

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
