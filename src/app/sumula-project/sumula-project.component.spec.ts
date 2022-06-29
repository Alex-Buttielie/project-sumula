import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumulaProjectComponent } from './sumula-project.component';

describe('SumulaProjectComponent', () => {
  let component: SumulaProjectComponent;
  let fixture: ComponentFixture<SumulaProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumulaProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumulaProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
