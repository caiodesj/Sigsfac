import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { TypeControl } from 'src/app/shared/table/table-generic.component';

@Component({
  selector: 'app-custom-reports',
  templateUrl: './custom-reports.component.html',
  styleUrls: ['./custom-reports.component.scss'],
})
export class CustomReportsComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  dataTable: TypeControl = {
    columns: [
      'position',
      'nome',
      'area',
      'atividade',
      'dataInicio',
      'dataFim',
      'numMantis',
      'assunto',
      'faseOrigem',
      'justificativa',
      'minutos',
      'horas',
    ],
    dataSource: [
      {
        position: 1,
        dataInicio: '02/07/2022',
        dia: 'Sex',
        apontamento: '[08:00:25] - [12:24:03] / [13:24:20] - {16:24:55}',
        horas: '07:24',
        diario: '-00:36',
        saldo: '-00:36',
        extras: '00:00',
        justificativa:
          '[E] Taxa do lixo - Análise da package enviada pelo Batata: crd_accordi_fattura_saldo_pck [S] Saída almoço',
      },
      {
        position: 2,
        dataInicio: '22/09/2022',
        dia: 'Ter',
        apontamento: '[08:00:25] - [12:24:03] / [13:24:20] - {16:24:55}',
        horas: '07:24',
        diario: '00:36',
        saldo: '00:36',
        extras: '02:00',
        justificativa:
          '[E] Justificativa: imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      },
      {
        position: 3,
        dataInicio: '31/10/2022',
        dia: 'Ter',
        apontamento: '[08:00:25] - [12:24:03] / [13:24:20] - {16:24:55}',
        horas: '05:45',
        diario: '05:36',
        saldo: '05:36',
        extras: '02:00',
        justificativa:
          '[G] by accident, sometimes on purpose (injected humour and the like)',
      },
    ],
  };

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
