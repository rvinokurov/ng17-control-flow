import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [ RouterModule],
  selector: 'ng17-control-flow-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng17-control-flow';
  flag = true;
  items = [{
    id: 1,
    name: 'Vasya'
  }, {
    id: 2,
    name: 'Petya'
  }]

  empty: Array<{id: number; name: string}> = [];
}
