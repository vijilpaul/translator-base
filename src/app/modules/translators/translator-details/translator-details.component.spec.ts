import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatorDetailsComponent } from './translator-details.component';

describe('TranslatorDetailsComponent', () => {
  let component: TranslatorDetailsComponent;
  let fixture: ComponentFixture<TranslatorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslatorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
