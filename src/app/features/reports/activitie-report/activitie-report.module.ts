import { TableActivitieReportComponent } from './table/table-activitie-report.component';
import { ActivitieReportComponent } from './activitie-report.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { AppMaterialModule } from '../../../shared/modules/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitieReportRoutingModule } from './activitie-report-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    MatTableExporterModule,
    ActivitieReportRoutingModule,
  ],
  declarations: [ActivitieReportComponent, TableActivitieReportComponent],
})
export class ActivitieReportModule {}
