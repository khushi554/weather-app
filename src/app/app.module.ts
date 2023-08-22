import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule } from '@angular/forms';
// <-- Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    HttpClientModule, 
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
