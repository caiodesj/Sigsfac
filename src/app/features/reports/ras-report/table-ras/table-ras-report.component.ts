import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  dataInicio: string;
  dia: string;
  escritorio: string;
  descricao: string;
  oi: string;
  ss: string;
  fase: string;
  percentual: string;
  horas: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    dataInicio: '02/07/2022',
    dia: 'Sex',
    escritorio: 'Rio de Janeiro',
    descricao:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ',
    oi: '156',
    ss: '00:00',
    fase: 'xx',
    percentual: '30%',
    horas: '-00:36',
  },

  {
    dataInicio: '12/07/2022',
    dia: 'Sabado',
    escritorio: 'Rio de Janeiro',
    descricao:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ',
    oi: '156',
    ss: '00:00',
    fase: 'xx',
    percentual: '30%',
    horas: '-00:36',
  },
];

@Component({
  selector: 'app-table-ras-report',
  templateUrl: './table-ras-report.component.html',
  styleUrls: ['./table-ras-report.component.scss'],
})
export class TableRasReportComponent implements OnInit {
  displayedColumns: string[] = [
    'dataInicio',
    'dia',
    'escritorio',
    'descricao',
    'oi',
    'ss',
    'fase',
    'percentual',
    'horas',
  ];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
