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
    { value: 2, description: "ZAGUEIRO" },
    { value: 3, description: "LATERAL" },
    { value: 4, description: "VOLANTE" },
    { value: 5, description: "MEIA" },
    { value: 6, description: "PONTA" },
    { value: 7, description: "ATACANTE" },
    { value: 8, description: "ALA" },
    { value: 9, description: "PONTA" }
  ];

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

}
