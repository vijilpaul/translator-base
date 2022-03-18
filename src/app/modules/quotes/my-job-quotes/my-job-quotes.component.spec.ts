import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJobQuotesComponent } from './my-job-quotes.component';

describe('MyJobQuotesComponent', () => {
  let component: MyJobQuotesComponent;
  let fixture: ComponentFixture<MyJobQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyJobQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyJobQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
