import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './../shared/header/header.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from '../default/default.component';
import { AppMaterialModule } from 'src/app/shared/modules/app-material.module';
import { FooterComponent } from '../shared/footer/footer.component';

@NgModule({
  imports: [CommonModule, AppMaterialModule, RouterModule, ReactiveFormsModule],
  declarations: [DefaultComponent, HeaderComponent, FooterComponent],
  exports: [DefaultComponent],
})
export class DefaultLayoutModule {}
