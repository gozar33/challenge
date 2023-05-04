import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
import * as UserActions from './users.actions';

export interface UserState extends EntityState<User> {
  searchTerm: string;
  genderFilters: string[];
  ageFilter: string;
  ageValue: number;
  eyeColorFilters: string[];
  birthDateFilter: Date[];
}

export const userAdapter = createEntityAdapter<User>({
  selectId: user => user.email
});

export const initialState: UserState = userAdapter.getInitialState({
  searchTerm: '',
  genderFilters: [],
  ageFilter: '',
  ageValue: 0,
  eyeColorFilters: [],
  birthDateFilter: []
});

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users }) => userAdapter.setAll(users, state)),
  on(UserActions.searchUsers, (state, { searchTerm }) => ({ ...state, searchTerm })),
  on(UserActions.applyFilters, (state, { genderFilters, ageFilter, ageValue, eyeColorFilters, birthDateFilter }) => ({
    ...state,
    genderFilters,
    ageFilter,
    ageValue,
    eyeColorFilters,
    birthDateFilter
  }))
);

export const { selectAll } = userAdapter.getSelectors();
