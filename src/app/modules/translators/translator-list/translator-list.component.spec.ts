import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatorListComponent } from './translator-list.component';

describe('TranslatorListComponent', () => {
  let component: TranslatorListComponent;
  let fixture: ComponentFixture<TranslatorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslatorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
