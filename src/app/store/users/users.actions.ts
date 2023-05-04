import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[] }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: any }>());
export const searchUsers = createAction('[User] Search Users', props<{ searchTerm: string }>());
export const applyFilters = createAction('[User] Apply Filters', props<{
  genderFilters: string[],
  ageFilter: string,
  ageValue: number,
  eyeColorFilters: string[],
  birthDateFilter: Date[]
}>());
