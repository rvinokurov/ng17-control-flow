import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeferredBlockComponent } from './components/deferred-block/deferred-block.component';
import { SIGNAL, createSignal } from '@angular/core/primitives/signals';
import { ComplexNewFlowComponent } from './components/complex-new-flow/complex-new-flow.component';
import { ComplexOldFlowComponent } from './components/complex-old-flow/complex-old-flow.component';

interface Item {
  id: number;
  name: string;
}
@Component({
  standalone: true,
  imports: [RouterModule, DeferredBlockComponent, ComplexNewFlowComponent, ComplexOldFlowComponent],
  selector: 'ng17-control-flow-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  flag = true;
  items = signal<Item[]>([
    {
      id: 1,
      name: 'Vasya',
    },
    {
      id: 2,
      name: 'Petya',
    },
  ]);

  empty = signal<Item[]>([]);

  constructor() {
    // setInterval(() => {
    //   this.items.update((items) => {
    //     return [
    //       ...items,
    //       { id: Math.round(Math.random() * 100 ), name: '' + Math.round(Math.random() * 10000) },
    //     ]
    //   }
    //   );
    // }, 1000);
  }
}
