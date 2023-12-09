import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SassDescriptionComponent } from './sass-desc/sass-desc.component';
import { SassFunctionComponent } from './sass-func/sass-func.component';
import { SassMixinComponent } from './sass-mixin/sass-mixin.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, SassDescriptionComponent, SassFunctionComponent, SassMixinComponent]
})
export class AppModule { }
