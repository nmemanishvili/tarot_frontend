import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLove } from './component-love';

describe('ComponentLove', () => {
  let component: ComponentLove;
  let fixture: ComponentFixture<ComponentLove>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLove]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLove);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
