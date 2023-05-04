import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { AppUsersTableComponent } from './components/app-users-table/app-users-table.component';
import { AppSearchInputComponent } from './components/app-search-input/app-search-input.component';
import { AppFilterButtonComponent } from './components/app-filter-button/app-filter-button.component';
import { AppFilterSidebarComponent } from './components/app-filter-sidebar/app-filter-sidebar.component';
import { reducers } from './store/app.reducer';
import { UserEffects } from './store/users/users.effects';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { environment } from './environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AppUsersTableComponent,
    AppSearchInputComponent,
    AppFilterButtonComponent,
    AppFilterSidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    ButtonModule,
    SidebarModule,
    TableModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
