import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { openSidebar } from '../../store/sidebars/sidebar.actions';

@Component({
  selector: 'app-filter-button',
  templateUrl: './app-filter-button.component.html',
  styleUrls: ['./app-filter-button.component.css']
})
export class AppFilterButtonComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }

  openSidebar() {
    this.store.dispatch( openSidebar());
  }
}
