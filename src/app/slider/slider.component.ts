import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {

  currentSlide = 0;
  slides = [
    { image: 'assets/image/tour/pune.jpg', title: 'PUNE', description: '"Pune is the Queen of Deccan"'},
    { image: 'assets/image/tour/panjab.jpg', title: 'PUNJAB', description: '"Punjab is the place of Sikhs"' },
    { image: 'assets/image/tour/nepal.jpg', title: 'NEPAL', description: '"Nepal is the country of the Mount Everest"' },
    { image: 'assets/image/tour/Kolkata.jpg', title: 'KOLKATA', description: '"Kolkata is famous for Howrah Bridge"' },
    { image: 'assets/image/tour/Mumbai.jpg', title: 'MUMBAI', description: '"Mumbai is the place of Sea"' },
    { image: 'assets/image/tour/Taj.jpg', title: 'AGRA', description: '"Agra is known for the Taj Mahal"' },
    { image: 'assets/image/tour/Udaipur.jpg', title: 'UDAIPUR', description: '"Udaipur is the lakes of city"' },
    { image: 'assets/image/tour/shimla.jpg', title: 'SHIMLA', description: '"Shimla is a favorite destination for Tourists"' },
    { image: 'assets/image/tour/sanchi.jpg', title: 'SANCHI', description: '"Sanchi is a famous for Great Stupa"' },
    { image: 'assets/image/tour/UK.jpg', title: 'UTTARAKHAN', description: '"Uttarakhan is the city of Gods"' },
    { image: 'assets/image/tour/Rajasthan.jpg', title: 'RAJASTHAN', description: '"Rajasthan is the city of Forts"' },
    { image: 'assets/image/tour/Maheshwar.jpg', title: 'INDORE', description: '"Indore is the city of Food"' },
    { image: 'assets/image/tour/Lakhnow.jpg', title: 'LUCKNOW', description: '"Lucknow is the City of Nawabs"' },
    { image: 'assets/image/tour/Ladakh.jpg', title: 'LADAKH', description: '"Ladakh is the city of Romance"' },
    { image: 'assets/image/tour/Kerala.jpg', title: 'KERALA', description: '"Kerala is a queen of south"' },
    { image: 'assets/image/tour/kashmir.jpg', title: 'KASHMIR', description: '"Kashmir is a Paradise on Earth"' },
    { image: 'assets/image/tour/Jodhpur.jpg', title: 'JODHPUR', description: '"Jodhpur is the city of Color"' },
    { image: 'assets/image/tour/Jaipur.jpg', title: 'JAIPUR', description: '"Jaipur is a famous for wildlife sanctuaries"' },
    { image: 'assets/image/tour/Delhi.jpg', title: 'DELHI', description: '"Delhi is a national government"' },
    { image: 'assets/image/tour/Chennai.jpg', title: 'CHENNAI', description: '"Chennai is a city for temples"' },
    { image: 'assets/image/tour/All_india.webp', title: 'ALL INDIA', description: '"The India is famous for Culture"' },
    { image: 'assets/image/tour/All.jpg', title: 'ALL INDIA TOUR', description: '"We are with you"' },
  ];

  constructor(

  ) { }

  ngOnInit(): void {
      this.startAutoSlider();
  }

  startAutoSlider() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 3 seconds (adjust as needed)
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}