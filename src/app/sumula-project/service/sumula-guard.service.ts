import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';
import { AuthUserService } from './auth-user.service';
import { SnackbarMessageService, TypeSnackMessage } from 'src/app/shared/service/snackbar-message.service';

@Injectable()
export class SumulaGuardService implements CanLoad, CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private authService: AuthUserService,
    private snackBarService: SnackbarMessageService
  ) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const canAccess = this.validateAccess(childRoute);
    return canAccess;
  }

  private validateAccess(childRoute: ActivatedRouteSnapshot | null): boolean {
    const key = childRoute?.data?.['chave'];
    const canAccess = this.canLoadRouter(key);
    if (!canAccess) {

      this.snackBarService.showSnackBarMessage({
        message: 'Faça login primeiro.',
        type: TypeSnackMessage.DANGER
      });

      setTimeout(() => {
        this.router.navigate(['project-sumula']);
      }, 100);
    }
    return canAccess;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.validateAccess(route);
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return this.validateAccess(null);
  }

  private canLoadRouter(chave: any): boolean {
    return this.authService.tokenUser !== null
      && this.authService.tokenUser !== undefined;
  }
}
