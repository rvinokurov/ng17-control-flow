import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeferredBlockComponent } from './components/deferred-block/deferred-block.component';
import { SIGNAL, createSignal } from '@angular/core/primitives/signals';

interface Item {
  id: number; 
  name: string
}
@Component({
  standalone: true,
  imports: [ RouterModule, DeferredBlockComponent],
  selector: 'ng17-control-flow-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  flag = true;
  items = signal<Item[]>([{
    id: 1,
    name: 'Vasya'
  }, {
    id: 2,
    name: 'Petya'
  }]);

  empty = signal<Item[]>([]);


  constructor() {
    
  }

}
