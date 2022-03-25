import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-decimal-wrapper',
  template: `<app-decimal [amount]="2.175"></app-decimal>`
})
export class DecimalWrapperComponent {
}
