import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypologiesMobileComponent } from './typologies-mobile.component';

describe('TypologiesMobileComponent', () => {
  let component: TypologiesMobileComponent;
  let fixture: ComponentFixture<TypologiesMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypologiesMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypologiesMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
