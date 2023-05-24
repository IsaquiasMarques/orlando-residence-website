import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplantationComponent } from './implantation.component';

describe('ImplantationComponent', () => {
  let component: ImplantationComponent;
  let fixture: ComponentFixture<ImplantationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplantationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImplantationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
