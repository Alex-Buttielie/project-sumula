import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface Player {
  name: string;
}


@Component({
  selector: 'app-summons-request',
  templateUrl: './summons-request.component.html',
  styleUrls: ['./summons-request.component.scss']
})
export class SummonsRequestComponent implements OnInit {
  myControl = new FormControl('');
  formGroup!: FormGroup;
  player!: any;
  options : Player[] = [{name: 'Alex'}, {name: 'Michel'}, {name: 'Willian'}];
  listOfPlayers: Observable<Player[]> | undefined;
  logo!: string;
  
  constructor(formBuilder: FormBuilder) { 
     this.buildForm(formBuilder); 
    }
    
    private buildForm(formBuilder: FormBuilder): void {
      this.formGroup = formBuilder.group({
        name: []
      });
  
      this.formGroup.get('name');

      if (environment.production) {
        this.logo = '/project-sumula/assets/ESCUDO.png';
      } else {
        this.logo = '../../assets/ESCUDO.png';
      }
  
    }

    
  ngOnInit(): void {
    this.listOfPlayers = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  private _filter(name: string): Player[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  public addToList (){

  }

  displayFn(player: Player): string {
    return player && player.name ? player.name : '';
  }

}
