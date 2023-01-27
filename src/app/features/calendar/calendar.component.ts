import { CalendarService } from './service/calendar.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../core/services/api.service';
import { DialogComponent } from './dialog/dialog.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarView,
} from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { addDays, addHours, endOfMonth, startOfDay, subDays } from 'date-fns';
import { AuthService } from 'src/app/core/auth/auth.service';
const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  displayedColumns: string[] = [
    'productName',
    'category',
    'date',
    'freshness',
    //'price',
    'comment',
    'action',
  ];

  CalendarView = CalendarView;

  viewDate: Date = new Date(2022, 4, 1);
  // viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // events: CalendarEvent<any>[];
  // viewDate: Date = new Date();
  // actions: EventAction[];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private dialog: MatDialog,
    private api: ApiService,
    public calendarService: CalendarService,
    public authService: AuthService
  ) {}

  openTimePoint() {
    this.dialog
      .open(DialogComponent, {
        maxWidth: '30%',
        autoFocus: false,
        // height: '75vh',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') {
          this.getAllProducts();
        }
      });
  }

  getAllProducts() {
    this.api.getProduct().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert('Error while fetching the records !!');
      },
    });
  }

  editProduct(row: any) {
    this.dialog
      .open(DialogComponent, {
        width: '30',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'update') {
          this.getAllProducts();
        }
      });
  }

  deleteProduct(id: number) {
    this.api.deleteProduct(id).subscribe({
      next: (res) => {
        alert('Produto deletado com sucesso');
        this.getAllProducts();
      },
      error: () => {
        alert('Error no momento deletar o produto');
      },
    });
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getEventsCalendar();
  }

  getEventsCalendar(
    startDate: string = '2022-05-01',
    endDate: string = '2022-05-08'
  ): void {
    this.calendarService
      .getCalendar(startDate, endDate)
      .subscribe((response) => {
        console.log(response);

        // loop no response para popular os eventos do calendario
        response.forEach((event) => {
          this.events = [
            ...this.events,
            {
              start: new Date(event.Start),
              end: new Date(event.End),
              title: event.Title,
              color: { ...colors[event.Style] },
            },
          ];
        });
      });
  }

  @Input() locale: string;
}
