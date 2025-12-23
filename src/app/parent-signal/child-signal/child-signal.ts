import { Component, computed, effect, input, output } from '@angular/core';

@Component({
  selector: 'app-child-signal',
  standalone: true,
  templateUrl: './child-signal.html',
  styleUrls: ['./child-signal.css'],
})
export class ChildSignal {
  name = input.required<string>();
  age = input.required<number>();

  changename = output<string>();

  detail = computed(() => `${this.name()} ${this.age()}`);

  constructor() {
    effect(() => console.log('effect name', this.name()));
    effect(() => console.log('effect age', this.age()));
    effect(() => console.log('detail', this.detail()));
  }

  changeName(newName: string) {
    if (newName.trim()) {
      this.changename.emit(newName);
    }
  }
}
