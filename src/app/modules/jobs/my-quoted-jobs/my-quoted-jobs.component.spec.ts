import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQuotedJobsComponent } from './my-quoted-jobs.component';

describe('MyQuotedJobsComponent', () => {
  let component: MyQuotedJobsComponent;
  let fixture: ComponentFixture<MyQuotedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyQuotedJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyQuotedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
