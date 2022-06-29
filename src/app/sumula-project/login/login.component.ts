import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/core/error-dialog/error-dialog.component';
import { LoadingSpinnerComponent } from 'src/app/core/loading-spinner/loading-spinner.component';
import { SucessDialogComponent } from 'src/app/core/sucess-dialog/sucess-dialog.component';
import { LoadingService } from 'src/app/shared/service';
import { environment } from 'src/environments/environment';
import { AuthUserService, LoginService } from '../service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logo!: any;
  versao!: any;
  dadosEmpresa!: any;
  messageLoggingIn!: string;
  formGroup!: FormGroup;
  hide = true;
  
  constructor(formBuilder: FormBuilder,
    private loadingService: LoadingService,
    private authUserService: AuthUserService,
    private dialog: MatDialog,
    private route: Router,
    private loginService: LoginService) { 
      //this.versao = environment.version;
      this.versao = '1.0.0';

   // if (environment.production) {
    //  this.logo = '/project-sumula/assets/ESCUDO.png';
    //} else {
      this.logo = '../../assets/ESCUDO.png';
    //}
    this.buildForm(formBuilder);
    }

  ngOnInit(): void {
    this.dadosEmpresa = { nomeEmpresa: 'Terceiro Tempo' };

  }

    private buildForm(formBuilder: FormBuilder): void {
    this.formGroup = formBuilder.group({
      email: [],
      password: [],
      isRecoveryKey: [],
      emailRecovery: []
    });

    this.formGroup.get('isRecoveryKey');
    this.formGroup.get('emailRecovery');

    this.formGroup.patchValue({
      isRecoveryKey: false
    })
  }

  validateSumulaUser(): void {
    this.loadingService.addLoading();

    this.dialog.open(LoadingSpinnerComponent, {
      data: 'Realizando Login...'
    });

    this.loginService.validateLoginSumula(this.formGroup.getRawValue())
      .pipe(finalize(() => this.loadingService.removerLoading()))
      .subscribe(
        result => this.validateLoginSumulaResult(result),
        fault => this.validateLoginSumulaFault(fault)
      );
  }

  validateLoginSumulaResult(result: any): void {
    setTimeout(() => this.dialog.closeAll(), 2000);
    this.addDatainTheSection(result);
  }

  private addDatainTheSection(result: any): void {
    this.authUserService.email = result.name;
    this.authUserService.tokenUser = result.token;

    this.route.navigate(['/clothing-store/menu']);

  }

  validateLoginSumulaFault(fault: { error: any; }): void {
    const { error } = fault;
    this.dialog.closeAll()
    this.dialog.open(ErrorDialogComponent, {
      data: error?.message
    });

  }

  onRecoveryKey() {
    this.formGroup.patchValue({
      isRecoveryKey: true
    });
  }

  recoveryKey() {
    this.loadingService.addLoading();
    this.onSenddingEmail();

    this.loginService.recoveryKey(this.formGroup.getRawValue())
      .pipe(finalize(() => this.loadingService.removerLoading()))
      .subscribe(
        result => this.recoveryKeyResult(result),
        fault => this.recoveryKeyFault(fault)
      );

    this.comeBack();
  }
  onSenddingEmail(): void {
    this.dialog.open(LoadingSpinnerComponent, {
      data: 'Enviando nova senha para o e-mail'
    });
  }
  onNewKeyEmission(): void {
    this.dialog.closeAll();
    this.dialog.open(SucessDialogComponent, {
      data: 'Nova senha enviada para o e-mail de cadastro.'
    });
  }
  comeBack(): void {
    this.formGroup.patchValue({
      isRecoveryKey: false
    })
  }

  recoveryKeyResult(result: any): void {
    this.onNewKeyEmission();
  }

  recoveryKeyFault(result: any): void {
    this.formGroup.patchValue({
      isRecoveryKey: true
    })
    this.onErrorRecoveryKey(result);
  }

  onErrorRecoveryKey(result: any) {
    const { error } = result;
    this.dialog.closeAll();
    this.dialog.open(ErrorDialogComponent, {
      data: error?.message
    });
  }
}
