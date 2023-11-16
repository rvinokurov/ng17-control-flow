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



import { Component, EventEmitter, afterNextRender, signal } from "@angular/core";

@Component({
    signals: true,
    selector: 'user-profile',
    template: `
      <p>Name: {{ firstName() }} {{ lastName() }}</p>
      <p>Account suspended: {{ suspended() }}</p>
    `,
  })
  export class UserProfile {
    firstName = input<string>(); 
  
    lastName = input('Smith'); 
  
    suspended = input<boolean>(false, {
      alias: 'disabled',
    });
  }

  @Component({
    signals: true,
    selector: 'simple-counter',
    template: `
      <button (click)="save()">Save count</button>
      <button (click)="reset()">Reset count</button>
    `,
  })
  export class SimpleCounter {
    saved = output<number>();
    cleared = output<number>({alias: 'reset'});
    
    save() {
      this.saved.emit(123);
    }
    
    reset() {
      this.cleared.emit(456);
    }
  }

  @Component({
    signals: true,
    selector: 'some-checkbox',
    standalone: true,
    template: `
      <p>Checked: {{ checked() }}</p>
      <button (click)="toggle()">Toggle</button>
    `,
  })
  export class SomeCheckbox {
    checked = model(false);
  
    toggle() {
      this.checked.update(c => !c);
    }
  }
  
  @Component({
    signals: true,
    selector: 'some-page',
    standalone: true,
    imports: [SomeCheckbox],
    template: `
      <some-checkbox [(checked)]="isAdmin" />
    `,
  })
  export class SomePage {
    isAdmin = signal(false);
  }

  @Component({
    signals: true,
    template: `
      <p #p>{{ longText() }}</p>
    `,
  })
  export class AfterRenderCmp {
    constructor() {
      afterNextRender(() => {
        console.log(
          'text height: ' 
          + this.p().nativeElement.scrollHeight);
      })
    }
    
    p = viewQuery('p');
  }

