import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RasReportComponent } from './ras-report.component';

const routes: Routes = [{ path: '', component: RasReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RasReportRoutingModule {}
