import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sumula-project',
  templateUrl: './sumula-project.component.html',
  styleUrls: ['./sumula-project.component.scss']
})
export class SumulaProjectComponent implements OnInit {

  logo: any;
  
  constructor(
    private router: Router,
    ) { 
      if (environment.production) {
        this.logo = '/project-sumula/assets/ESCUDO.png';
      } else {
        this.logo = '../../assets/ESCUDO.png';
      }
    }

  ngOnInit(): void {
  }

}
