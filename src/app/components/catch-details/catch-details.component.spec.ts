import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchDetailsComponent } from './catch-details.component';

describe('CatchDetailsComponent', () => {
  let component: CatchDetailsComponent;
  let fixture: ComponentFixture<CatchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
