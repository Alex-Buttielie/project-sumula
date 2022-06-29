import { Injectable } from '@angular/core';

/**
 * Responsible for saving the logged-in user
 */
@Injectable()
export class AuthUserService {

  private TOKEN_USER= 'TOKEN_USER';
  private USER = 'USER';
  private EMAIL = 'EMAIL';


  constructor() { }

  limparSessao(): void {
    localStorage.removeItem(this.TOKEN_USER);
    localStorage.removeItem(this.USER);
    localStorage.removeItem(this.EMAIL);
  }

  get email(): string | null{
    return localStorage.getItem(this.EMAIL);
  }

  set email(value: any) {
    localStorage.setItem(this.EMAIL, value);
  }

  get tokenUser(): string | null {
    return localStorage.getItem(this.TOKEN_USER);
  }

  set tokenUser(value: any) {
    localStorage.setItem(this.TOKEN_USER, value);
  }

  get user(): string{
    return JSON.parse(localStorage.getItem(this.USER) || '{}');
  }

  set user(value: any) {
    localStorage.setItem(this.USER, JSON.stringify(value));
  }
}
