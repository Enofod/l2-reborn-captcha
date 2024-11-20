import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaViewComponent } from './captcha-view.component';

describe('CaptchaViewComponent', () => {
  let component: CaptchaViewComponent;
  let fixture: ComponentFixture<CaptchaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptchaViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptchaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
