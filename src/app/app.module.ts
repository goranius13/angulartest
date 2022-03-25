import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecimalWrapperComponent } from './decimal/decimal-wrapper.component';
import { DecimalComponent } from './decimal/decimal.component';
import { UpgradesComponent } from './upgrades/upgrades.component';
import { OptionalIngredientDirective, RecipesComponent } from './recipes/recipes.component';
import { WeatherComponent, WeatherService } from './weather/weather.component';
import { Counter, CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    DecimalWrapperComponent,
    DecimalComponent,
    UpgradesComponent,
    RecipesComponent,
    OptionalIngredientDirective,
    WeatherComponent,
    CounterComponent,
    Counter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
