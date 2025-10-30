import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentOptions } from './component-options';

describe('ComponentOptions', () => {
  let component: ComponentOptions;
  let fixture: ComponentFixture<ComponentOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
