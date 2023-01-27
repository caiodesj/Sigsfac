import { AppMaterialModule } from 'src/app/shared/modules/app-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { signupRoutes } from './sign-up.routing';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    RouterModule.forChild(signupRoutes),
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
})
export class SignUpModule {}
