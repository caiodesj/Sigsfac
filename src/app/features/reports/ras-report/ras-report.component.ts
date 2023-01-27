import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

import { UploadComponent } from './shared/upload/upload.component';

@Component({
  selector: 'app-ras-report',
  templateUrl: './ras-report.component.html',
  styleUrls: ['./ras-report.component.scss'],
})
export class RasReportComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  notifications = 0;
  showSpinner = false;
  table = false;

  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      this.table = true;
    }, 1000);
  }

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(UploadComponent, {
      maxWidth: '30%',
      autoFocus: false,
      // height: '75vh',
    });
  }

  ngOnInit(): void {}
}
