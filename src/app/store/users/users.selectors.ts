import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { selectAll } from './users.reducer';

export const selectUserState = (state: AppState) => state.users;

export const selectFilteredUsers = createSelector(
  selectUserState,
  state => {
    let filteredUsers = selectAll(state);
    if (state.searchTerm) {
      filteredUsers = filteredUsers.filter(user =>
        user.firstName.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    }
    if (state.genderFilters.length > 0) {
      filteredUsers = filteredUsers.filter(user =>
        state.genderFilters.includes(user.gender.toLowerCase())
      );
    }
    if (state.ageFilter && state.ageValue !== 0) {
      filteredUsers = filteredUsers.filter(user => {
        switch (state.ageFilter) {
          case 'eq':
            return user.age === state.ageValue;
          case 'gt':
            return user.age > state.ageValue;
          case 'lt':
            return user.age < state.ageValue;
          default:
            return true;
        }
      });
    }
    if (state.eyeColorFilters.length > 0) {
      filteredUsers = filteredUsers.filter(user =>
        state.eyeColorFilters.includes(user.eyeColor.toLowerCase())
      );
    }
    if (state.birthDateFilter.length > 0) {
      filteredUsers = filteredUsers.filter(user =>
        new Date(user.birthdate) >= state.birthDateFilter[0] && new Date(user.birthdate) <= state.birthDateFilter[1]
      );
    }
    return filteredUsers;
  }
);
