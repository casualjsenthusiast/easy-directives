import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading.component';

import { LoadingDirective } from './directives/loading.directive';

@NgModule({
  declarations: [AppComponent, LoadingDirective, LoadingComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
