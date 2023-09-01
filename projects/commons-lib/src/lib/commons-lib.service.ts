import { BehaviorSubject } from 'rxjs';
import { IUser } from './models/IUser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonsLibService {

  private _user = new BehaviorSubject<IUser|null>({
    id: "1232", name: 'Yanina!!', lastname: 'Desde commons lib', mail: 'yanina.hernandez@deepsource.cl'
  });
  public getUser = this._user.asObservable();

  setUser(user: IUser): void {
    this._user.next(user);
  }
}
