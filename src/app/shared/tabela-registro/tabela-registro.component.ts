import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-registro',
  templateUrl: './tabela-registro.component.html',
  styleUrls: ['./tabela-registro.component.scss'],
})
export class TabelaRegistroComponent implements OnInit {
  displayedColumns: string[] = [
    'data',
    'hora',
    'atividade',
    'justificativa',
    'actions',
  ];
  dataSource = new MatTableDataSource();

  constructor() {}

  ngOnInit(): void {}
}
