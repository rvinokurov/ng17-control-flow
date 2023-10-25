import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'deferred-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deferred-block.component.html',
  styleUrls: ['./deferred-block.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeferredBlockComponent {

}
