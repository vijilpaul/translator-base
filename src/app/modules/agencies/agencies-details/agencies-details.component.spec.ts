import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesDetailsComponent } from './agencies-details.component';

describe('AgenciesDetailsComponent', () => {
  let component: AgenciesDetailsComponent;
  let fixture: ComponentFixture<AgenciesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
