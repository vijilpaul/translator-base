import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableQuotesComponent } from './mat-table-quotes.component';

describe('MatTableQuotesComponent', () => {
  let component: MatTableQuotesComponent;
  let fixture: ComponentFixture<MatTableQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTableQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
