import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/shared/modules/app-material.module';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [CommonModule, AppMaterialModule, RouterModule, ReactiveFormsModule],
  declarations: [AuthComponent],
  exports: [AuthComponent],
})
export class AuthLayoutModule {}
