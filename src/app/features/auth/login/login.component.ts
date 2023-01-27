import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('lumengar', [Validators.required]),
    password: new FormControl('senhas', Validators.required),
  });

  constructor(
    private AuthService: AuthService,
    private Router: Router,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    this.AuthService.signIn({ email, password })
      .pipe(
        this.toast.observe({
          success: 'Logado com sucesso',
          loading: 'Logando...',
          error: 'Erro ao acessar',
        })
      )
      .subscribe(() => {
        this.Router.navigate(['../calendar']); //utilizar ../home
      });
  }
}
