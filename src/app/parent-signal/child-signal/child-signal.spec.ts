import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSignal } from './child-signal';

describe('ChildSignal', () => {
  let component: ChildSignal;
  let fixture: ComponentFixture<ChildSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
