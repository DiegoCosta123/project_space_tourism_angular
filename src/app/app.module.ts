import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { NavFooterComponent } from './components/nav-footer/nav-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinationComponent,
    NavHeaderComponent,
    NavFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
