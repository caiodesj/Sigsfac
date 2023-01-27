import { Component, Input, OnInit } from '@angular/core';

export interface TypeControl {
  columns: string[];
  dataSource: any;
}

@Component({
  selector: 'app-table-generic',
  templateUrl: './table-generic.component.html',
  styleUrls: ['./table-generic.component.scss'],
})
export class TableGenericComponent implements OnInit {
  @Input() data: TypeControl;

  constructor() {
    this.data = {
      columns: [],
      dataSource: [],
    };
  }

  ngOnInit(): void {}
}
