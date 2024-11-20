import { Component } from '@angular/core';
import { AntiDualboxComponent } from '../anti-dualbox/anti-dualbox.component';

@Component({
  selector: 'app-captcha-view',
  imports: [ AntiDualboxComponent],
  templateUrl: './captcha-view.component.html',
  styleUrl: './captcha-view.component.scss'
})
export class CaptchaViewComponent {

}
