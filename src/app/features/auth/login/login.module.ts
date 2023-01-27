import { AppMaterialModule } from 'src/app/shared/modules/app-material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { signInRoutes } from './login.routing';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(signInRoutes),
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
})
export class SignInModule {}
