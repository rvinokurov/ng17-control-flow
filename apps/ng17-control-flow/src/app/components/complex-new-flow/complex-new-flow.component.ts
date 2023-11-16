import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'complex-new-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './complex-new-flow.component.html',
  styleUrls: ['./complex-new-flow.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComplexNewFlowComponent {

  flag = signal(true);

  trackFn(item: any) {
    return item.id;
  }

  items = signal([
    {
      id: 1,
      name: "Petya",
      type: 'card',
    },
    {
      id: 2,
      name: "Vasya",
      type: 'text',
    },
    {
      id: 3,
      name: "Roman",
      type: 'default',
    },
  ]);

  oldItems = signal([
    {
      id: 1,
      name: "Petya",
    },
    {
      id: 2,
      name: "Vasya",
    },
    {
      id: 3,
      name: "Roman",
    },
  ]);
}
