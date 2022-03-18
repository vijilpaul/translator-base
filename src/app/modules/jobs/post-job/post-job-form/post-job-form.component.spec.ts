import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostJobFormComponent } from './post-job-form.component';

describe('PostJobFormComponent', () => {
  let component: PostJobFormComponent;
  let fixture: ComponentFixture<PostJobFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostJobFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostJobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
