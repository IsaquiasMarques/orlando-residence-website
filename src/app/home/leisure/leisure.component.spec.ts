import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeisureComponent } from './leisure.component';

describe('LeisureComponent', () => {
  let component: LeisureComponent;
  let fixture: ComponentFixture<LeisureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeisureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeisureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
