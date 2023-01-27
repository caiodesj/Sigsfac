import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/shared/modules/app-material.module';
import { TableGenericComponent } from './table-generic.component';
import { MatTableExporterModule } from 'mat-table-exporter';

@NgModule({
  imports: [CommonModule, AppMaterialModule, MatTableExporterModule],
  declarations: [TableGenericComponent],
  exports: [TableGenericComponent],
})
export class TableGenericModule {}
