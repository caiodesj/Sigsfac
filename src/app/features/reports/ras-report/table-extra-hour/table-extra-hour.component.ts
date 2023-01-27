import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  dia: string;
  numHoras: string;
  deHora: string;
  deMinutos: string;
  aHora: string;
  aMinutos: string;
  oi: string;
  descricao: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    dia: 'Sex',
    numHoras: 'Rio de Janeiro',
    deHora: '07:24',
    deMinutos: '00:36',
    aHora: '01:00',
    aMinutos: '00:00:',
    oi: '234',
    descricao:
      'recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },
  {
    dia: 'segunda',
    numHoras: 'Rio de Janeiro',
    deHora: '07:24',
    deMinutos: '00:36',
    aHora: '01:00',
    aMinutos: '00:00:',
    oi: '234',
    descricao:
      'recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },
  {
    dia: 'Sex',
    numHoras: 'São Paulo',
    deHora: '07:24',
    deMinutos: '00:36',
    aHora: '01:00',
    aMinutos: '00:00:',
    oi: '234',
    descricao:
      'recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },
  {
    dia: 'Sex',
    numHoras: 'São Paulo',
    deHora: '07:24',
    deMinutos: '00:36',
    aHora: '01:00',
    aMinutos: '00:00:',
    oi: '234',
    descricao:
      'recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },
];
@Component({
  selector: 'app-table-extra-hour',
  templateUrl: './table-extra-hour.component.html',
  styleUrls: ['./table-extra-hour.component.scss'],
})
export class TableExtraHourComponent implements OnInit {
  displayedColumns: string[] = [
    'dia',
    'numHoras',
    'deHora',
    'deMinutos',
    'aHora',
    'aMinutos',
    'oi',
    'descricao',
  ];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
