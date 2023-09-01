import { Component, OnInit } from '@angular/core';
import { CommonsLibService } from '@commons-lib';
import { IUser } from 'projects/commons-lib/src/lib/models/IUser';

@Component({
  standalone: true,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user:IUser|null = null

  constructor(private _commonsLibService: CommonsLibService) {}

  ngOnInit(): void {
    this._commonsLibService.getUser.subscribe({next: (val) => this.user = val})
  }
}
