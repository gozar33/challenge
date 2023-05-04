import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { searchUsers } from '../../store/users/users.actions';

@Component({
  selector: 'app-search-input',
  templateUrl: './app-search-input.component.html',
  styleUrls: ['./app-search-input.component.css']
})
export class AppSearchInputComponent implements OnInit {
  searchTerm: string = '';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onSearch(): void {
    this.store.dispatch(searchUsers({ searchTerm: this.searchTerm }));
  }
}
