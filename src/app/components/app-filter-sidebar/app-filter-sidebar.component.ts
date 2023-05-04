import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { UserService } from '../../services/user.service';
import { AppState } from '../../store/app.reducer';
import { applyFilters } from '../../store/users/users.actions';
import { map, Observable } from 'rxjs';
import { closeSidebar } from '../../store/sidebars/sidebar.actions';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './app-filter-sidebar.component.html',
  styleUrls: ['./app-filter-sidebar.component.css']
})
export class AppFilterSidebarComponent implements OnInit {
  genderFilters: string[] = [];
  ageOptions: any[] = [
    { label: 'Equal', value: 'eq' },
    { label: 'Greater', value: 'gt' },
    { label: 'Smaller', value: 'lt' }
  ];
  ageFilter: string = 'eq';
  ageValue: number = 0;
  eyeColors: string[] = [];
  eyeColorFilters: string[] = [];
  birthDateFilter: Date[] = [];
  visible$:Observable<boolean>=new Observable<boolean>();

  constructor(private store: Store<AppState>,private userService:UserService) {
    this.visible$ = this.store.pipe(select(state => state.sidebar.visible));

  }


  ngOnInit(): void {
    this.userService.getUsers().pipe(
      map(data => data.map(user => user.eyeColor)),
      map(eyeColors => eyeColors.filter((value, index, self) => self.indexOf(value) === index))
    ).subscribe(eyeColors => {
      this.eyeColors = eyeColors;
    });
  }

  closeSidebar() {
    this.store.dispatch( closeSidebar());
  }

  onApply(): void {
    this.store.dispatch(applyFilters({
      genderFilters: this.genderFilters,
      ageFilter: this.ageFilter,
      ageValue: this.ageValue,
      eyeColorFilters: this.eyeColorFilters,
      birthDateFilter: this.birthDateFilter
    }));
  }
}


