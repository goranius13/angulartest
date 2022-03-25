import { Directive, Component, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[optionalIngredient]'
})
export class OptionalIngredientDirective {
  
  constructor(private elRef: ElementRef) {
  }

  @HostListener('click') onClick() {
    if (this.elRef.nativeElement.classList.contains('strikethrough')) {
      this.elRef.nativeElement.classList.remove('strikethrough');
    } else {
      this.elRef.nativeElement.classList.add('strikethrough');
    }
  }
}

@Component({
  selector: 'app-recipes',
  template: `<div>Scrambled eggs ingredients:
                <p>2 eggs</p>
                <p optionalIngredient>1 table spoon of cream</p>
                <p optionalIngredient>100g of cheese</p>
                <p>salt</p>
              <div>`,
  styles: [".strikethrough { text-decoration: line-through; }"]
})

export class RecipesComponent {

}
