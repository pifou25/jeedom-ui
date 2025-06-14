import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqlogicComponent } from './eqlogic.component';

describe('EqlogicComponent', () => {
  let component: EqlogicComponent;
  let fixture: ComponentFixture<EqlogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EqlogicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EqlogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
