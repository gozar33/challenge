import { Action, createAction } from '@ngrx/store';

export enum SidebarActionTypes {
  OpenSidebar = '[Sidebar] Open Sidebar',
  CloseSidebar = '[Sidebar] Close Sidebar'
}

export const openSidebar = createAction(SidebarActionTypes.OpenSidebar);
export const closeSidebar = createAction(SidebarActionTypes.CloseSidebar);
