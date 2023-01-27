import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { LayoutComponent } from './layout.component';
import { AuthLayoutModule } from './auth/auth.module';
import { DefaultLayoutModule } from './default/default.module';

const layoutModules = [AuthLayoutModule, DefaultLayoutModule];

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatTooltipModule,
    ...layoutModules, // variavel para chamadas de modulos
  ],
  exports: [LayoutComponent, ...layoutModules],
})
export class LayoutModule {}
