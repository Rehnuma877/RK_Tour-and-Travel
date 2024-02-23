import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingDetailsComponent } from '../booking-details/booking-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  currentSlide = 0;
  slides = [
    { image: 'assets/image/Home/pune.jpg', title: 'PUNE', description: '"Pune is the Queen of Deccan"'},
    { image: 'assets/image/Home/Mumbai.jpg', title: 'MUMBAI', description: '"Mumbai is the place of Sea"' },
    { image: 'assets/image/Home/Kerala.jpg', title: 'KERALA', description: '"Kerala is a queen of south"' },
    { image: 'assets/image/Home/shimla.jpg', title: 'SHIMLA', description: '"Shimla is a favorite destination for Tourists"' },
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.startAutoSlider();
}

startAutoSlider() {
  setInterval(() => {
    this.nextSlide();
  }, 2000); // Change slide every 3 seconds (adjust as needed)
}

nextSlide() {
  this.currentSlide = (this.currentSlide + 1) % this.slides.length;
}

prevSlide() {
  this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
}

  openBookingDetailsDailog() {
    this.dialog.open(BookingDetailsComponent);
  }
}
