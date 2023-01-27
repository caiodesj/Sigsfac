import { switchMap } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private httpClient: HttpClient) {}

  getCalendar(startDate: string, endDate: string): Observable<any> {
    return this.httpClient.get(
      `${environment.hostApi}/calendar/${startDate}/${endDate}`
    );
  }
}
