import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { DecimalWrapperComponent } from './decimal/decimal-wrapper.component';
import { RecipesComponent } from './recipes/recipes.component';
import { UpgradesComponent } from './upgrades/upgrades.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: '', redirectTo: '/decimal', pathMatch: 'full' },
  { path: 'decimal', component: DecimalWrapperComponent },
  { path: 'upgrades', component: UpgradesComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'counter', component: CounterComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
