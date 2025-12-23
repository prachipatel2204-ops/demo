import { Component, signal } from '@angular/core';
import { ChildSignal } from './child-signal/child-signal';

@Component({
  selector: 'app-parent-signal',
  standalone: true,
  imports: [ChildSignal],
  templateUrl: './parent-signal.html',
})
export class ParentSignal {

  parentname = signal('Prachi');
  parentage = signal(30);
}
