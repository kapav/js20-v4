import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {EvidenceService} from './shared/services/evidence.service'
import { BracketPipe } from './shared/pipes/bracket.pipe'
import { UnlessDirective } from './shared/directives/bevel/bevel.directive';
import { AppComponent } from './app.component';
import {HomePageComponent} from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BracketPipe,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EvidenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
