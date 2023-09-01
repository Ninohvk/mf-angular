import { ITickets } from './../model/ITickets';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IResponseCat } from '../model/IResponseCat';

@Injectable({ providedIn: 'root' })
export class TicketsService {
  constructor(private _httpClient: HttpClient) {}

  getTickets(): Observable<ITickets[]> {
    return this._httpClient
      .get<IResponseCat>('https://meowfacts.herokuapp.com/?count=8&lang=esp')
      .pipe(
        map((response) => {
          return response.data.map<ITickets>((cat, index) => { return { id: this._getNumberRandom(), detail: cat, state: 'open' }});
        })
      );
  }

  private _getNumberRandom() {
    return Math.floor(Math.random() * (500 - 1 + 1) + 1);
  }
}
