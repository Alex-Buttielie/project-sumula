import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  urlInner!: string;
  constructor() { }

  get url(): string {
    return  this.urlInner || environment.URL;
  }

  set url(value) {
    this.urlInner = value;
  }
}
