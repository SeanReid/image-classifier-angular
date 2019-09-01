import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageClassifierComponent } from './image-classifier/image-classifier.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageClassifierComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
