import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableJobsComponent } from './mat-table-jobs.component';

describe('MatTableJobsComponent', () => {
  let component: MatTableJobsComponent;
  let fixture: ComponentFixture<MatTableJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTableJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
