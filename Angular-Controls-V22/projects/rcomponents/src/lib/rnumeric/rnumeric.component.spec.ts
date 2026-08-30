import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RNumericComponent } from './rnumeric.component';

describe('RNumericComponent', () => {
  let component: RNumericComponent;
  let fixture: ComponentFixture<RNumericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RNumericComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RNumericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert an empty required value to 0', () => {
    component.required = true;

    component.Value = 1 as any;
    component.Value = '' as any;

    expect(component.Value).toBe(0);
  });

  it('should keep an empty optional value as empty', () => {
    component.required = false;

    component.Value = 1 as any;
    component.Value = '' as any;
    component.onBlur(new Event('blur'));

    expect(component.Value).toBeNull();
  });

  it('should increment decimal values without truncating the fraction', () => {
    component.Value = 0.5 as any;
    component.Inc();

    expect(component.Value).toBe(1.5);
  });
});
