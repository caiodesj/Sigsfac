import { TableGenericModule } from './../../../shared/table/table-generic.module';
import { MatTableExporterModule } from 'mat-table-exporter';
import { AppMaterialModule } from '../../../shared/modules/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomReportsComponent } from './custom-reports.component';
import { CustomReporstRoutingModule } from './custom-reports-routing.module';
import { TableCustomReportComponent } from '../../reports/custom-reports/table/table-custom-report.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    MatTableExporterModule,
    CustomReporstRoutingModule,
    TableGenericModule,
  ],
  declarations: [CustomReportsComponent, TableCustomReportComponent],
})
export class CustomReportsModule {}
