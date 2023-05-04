import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { AppState } from '../../store/app.reducer';
import { selectFilteredUsers } from '../../store/users/users.selectors';

@Component({
  selector: 'app-users-table',
  templateUrl: './app-users-table.component.html',
  styleUrls: ['./app-users-table.component.css']
})
export class AppUsersTableComponent implements OnInit {
  users$: Observable<User[]>=new Observable<User[]>();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.users$ = this.store.select(selectFilteredUsers);
  }
}
