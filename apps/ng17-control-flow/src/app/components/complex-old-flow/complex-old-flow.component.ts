import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'complex-old-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './complex-old-flow.component.html',
  styleUrls: ['./complex-old-flow.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComplexOldFlowComponent {
  flag = signal(true);

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
