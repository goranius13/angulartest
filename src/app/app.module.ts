import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent, Counter } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    Counter
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
