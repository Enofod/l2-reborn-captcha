import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, tap, timer } from 'rxjs';

type ValidationResult = 'OK' | 'ERROR'

@Component({
  selector: 'app-anti-dualbox',
  imports: [ CommonModule ],
  templateUrl: './anti-dualbox.component.html',
  styleUrl: './anti-dualbox.component.scss'
})
export class AntiDualboxComponent implements OnInit {
  
  currentLetterSignal = signal('a');
  lettersSignal = signal<string[]>([])

  lastAnswerResultSignal = signal<ValidationResult | undefined>(undefined)
  lastAnswerResultTimeSignal = signal<string | undefined>(undefined)

  time: string = '';

  // 21
  availableLetters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'w', 'y'
  ]

  timer$ = timer(0, 10).pipe(
    map(time => String(time).slice(0, -2) + '.' + String(time).slice(-2) ),
    tap(time => this.time = time)
  );

  ngOnInit(): void {
    this.generateNewCaptcha();
  }

  generateNewCaptcha() {
    const randomItems = this.pickRandomItems(this.availableLetters, 9)
    
    const letter = randomItems[Math.floor(Math.random() * 9)]
    this.currentLetterSignal.set(letter)
    this.lettersSignal.set(randomItems)
  }

  pickRandomItems = <T extends unknown> (arr: T[], n: number): T[] => {
    const shuffled = Array.from(arr).sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

  onLetterClick(letter: string) {
    this.lastAnswerResultTimeSignal.set(this.time)
    if (letter === this.currentLetterSignal()) {
      this.lastAnswerResultSignal.set('OK')
    } else {
      this.lastAnswerResultSignal.set('ERROR')
    }
    
    this.generateNewCaptcha();

    this.timer$ = timer(0, 10).pipe(
      map(time => String(time).slice(0, -2) + '.' + String(time).slice(-2) ),
      tap(time => this.time = time)
    );
  }

}
