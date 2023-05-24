import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanizedModelsComponent } from './humanized-models.component';

describe('HumanizedModelsComponent', () => {
  let component: HumanizedModelsComponent;
  let fixture: ComponentFixture<HumanizedModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanizedModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanizedModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
