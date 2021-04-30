import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentApiComponent } from './recent-api.component';

describe('RecentApiComponent', () => {
  let component: RecentApiComponent;
  let fixture: ComponentFixture<RecentApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
