const input = function<T>(value?: T, options?: any) {
  return signal(value ?? null);
}

const model = function<T>(value?: T, options?: any) {
  return signal(value ?? null);
}

const output = function<T>(options?: any) {
  return new EventEmitter<T>(options);
}
function viewQuery(arg0: string): any {
  return () => {};
}

interface WritableSignal<Video> {
  id: number;
  title: string;
  thumbnail: string;
}

class VideoService {
  getByCategory(id: number | null): Observable<Video[]> {
    return of([]);
  }
}

class AnalyticsService {
  sendEvent(data: any) {
    
  }
}

import { ChangeDetectionStrategy, Component, EventEmitter, Input, afterRender, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Observable, filter, of, switchMap } from 'rxjs';


import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'video-block',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoBlockComponent {
  @Input() video!: any;
}



@Component({
  selector: 'video-list',
  standalone: true,
  signals: true,
  imports: [VideoBlockComponent],
  templateUrl: './video-list.component.html',
})
export class VideoListComponent {
  private videoService = inject(VideoService);
  private analyticsService = inject(AnalyticsService);

  category = input<number>(); 

  videos = toSignal(
    toObservable(this.category)
    .pipe(
      filter(v => v !== undefined),
      switchMap(id => this.videoService.getByCategory(id))
    ),
    {
      initialValue: []
    }
  )

  constructor() {
    afterRender(() => {
      this.analyticsService.sendEvent('video-list-updated');
    });
  };
}

