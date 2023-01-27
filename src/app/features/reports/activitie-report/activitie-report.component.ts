import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-activitie-report',
  templateUrl: './activitie-report.component.html',
  styleUrls: ['./activitie-report.component.scss'],
})
export class ActivitieReportComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
