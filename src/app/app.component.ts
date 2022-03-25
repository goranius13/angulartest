import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  template: `<button (click)="increment()">Increment</button><p>{{ count }}</p>`
})
export class Counter {
  @Input() count: number = 0;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();
  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }
}

@Component({
  selector: 'app-root',
  template: `<counter [count]="counterState" (countChange)="countChange($event)"></counter>`
})
export class AppComponent {
  public counterState: number = 1;
  
  countChange(value: number) {
    this.counterState = value;
  }
}
