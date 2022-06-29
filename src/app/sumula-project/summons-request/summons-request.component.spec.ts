import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonsRequestComponent } from './summons-request.component';

describe('SummonsRequestComponent', () => {
  let component: SummonsRequestComponent;
  let fixture: ComponentFixture<SummonsRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonsRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
