import { createReducer ,on} from '@ngrx/store';
import { openSidebar, closeSidebar } from './sidebar.actions';

export interface SidebarState {
  visible: boolean;
}

const initialState: SidebarState = {
  visible: false
};

export const sidebarReducer = createReducer(
  initialState,
  on(openSidebar, state => ({ ...state, visible: true })),
  on(closeSidebar, state => ({ ...state, visible: false }))
);
