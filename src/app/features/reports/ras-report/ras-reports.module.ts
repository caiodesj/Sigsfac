import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RasReportComponent } from './ras-report.component';
import { RasReportRoutingModule } from './ras-report-routing.module';
import { TableRasReportComponent } from './table-ras/table-ras-report.component';
import { TableExtraHourComponent } from './table-extra-hour/table-extra-hour.component';
import { AppMaterialModule } from 'src/app/shared/modules/app-material.module';

@NgModule({
  imports: [CommonModule, AppMaterialModule, RasReportRoutingModule],
  declarations: [
    RasReportComponent,
    TableRasReportComponent,
    TableExtraHourComponent,
  ],
})
export class RasReportsModule {}
