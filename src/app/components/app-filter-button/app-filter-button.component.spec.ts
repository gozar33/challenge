import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFilterButtonComponent } from './app-filter-button.component';

describe('AppFilterButtonComponent', () => {
  let component: AppFilterButtonComponent;
  let fixture: ComponentFixture<AppFilterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFilterButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFilterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
