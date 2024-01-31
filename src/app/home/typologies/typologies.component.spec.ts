import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypologiesComponent } from './typologies.component';

describe('TypologiesComponent', () => {
  let component: TypologiesComponent;
  let fixture: ComponentFixture<TypologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypologiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
