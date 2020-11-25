import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipesTestComponent } from './pipes-test/pipes-test.component';
import { MyHobbyComponent } from './my-hobby/my-hobby.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesTestComponent,
    MyHobbyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
