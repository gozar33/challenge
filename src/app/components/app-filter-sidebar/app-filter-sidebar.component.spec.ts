import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFilterSidebarComponent } from './app-filter-sidebar.component';

describe('AppFilterSidebarComponent', () => {
  let component: AppFilterSidebarComponent;
  let fixture: ComponentFixture<AppFilterSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFilterSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFilterSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
