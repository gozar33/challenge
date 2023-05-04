import { ActionReducerMap } from '@ngrx/store';
import { sidebarReducer, SidebarState } from './sidebars/sidebar.reducer';
import { UserState, userReducer } from './users/users.reducer';

export interface AppState {
  users: UserState;
  sidebar:SidebarState
}

export const reducers: ActionReducerMap<AppState> = {
  users: userReducer,
  sidebar:sidebarReducer
};
