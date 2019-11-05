import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import {EvidenceService} from './shared/services/evidence.service'
import { BracketPipe } from './shared/pipes/bracket.pipe'
import { UnlessDirective } from './shared/directives/bevel/bevel.directive';
import {HighlightDirective} from './shared/directives/chamfer/chamfer.directive'
import { AppComponent } from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {GarretComponent} from './shared/components/garret/garret.component';
import { StoreyComponent } from './shared/components/storey/storey.component';
import { GableComponent } from './shared/components/gable/gable.component';
import { SlopeComponent } from './shared/components/slope/slope.component';
import { SlabComponent } from './shared/components/slab/slab.component';
import { WallComponent } from './shared/components/wall/wall.component';
import { DeclivityComponent } from './shared/components/declivity/declivity.component';
import { InclineComponent } from './shared/components/incline/incline.component'
import { PitchComponent } from './shared/components/pitch/pitch.component';
import { SlantComponent } from './shared/components/slant/slant.component';
import { BiasComponent } from './shared/components/bias/bias.component';
import { CliffComponent } from './shared/components/cliff/cliff.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GarretComponent,
    StoreyComponent,
    GableComponent,
    SlopeComponent,
    SlabComponent,
    WallComponent,
    BiasComponent,
    CliffComponent,
    DeclivityComponent,
    InclineComponent,
    PitchComponent,
    SlantComponent,
    BracketPipe,
    UnlessDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [EvidenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
