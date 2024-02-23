import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import {MatDialogModule,MatDialog} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    BookingDetailsComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    FooterComponent,
    SliderComponent,
    NextDirective,
    PrevDirective
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonModule,
    MatButtonModule,
    MatCardModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const fadeInAnimation = trigger('fadeInAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('500ms', style({ opacity: 0 }))
  ])
]);
