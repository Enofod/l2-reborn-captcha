import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiDualboxComponent } from './anti-dualbox.component';

describe('AntiDualboxComponent', () => {
  let component: AntiDualboxComponent;
  let fixture: ComponentFixture<AntiDualboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntiDualboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntiDualboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
