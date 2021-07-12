// core
import { Component, Input, OnInit } from '@angular/core';

// services
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  // input properties for cominicate app component
  @Input() slides: number = 5;
  @Input() infinite: boolean = true;

  currentSlideIndex = 0;
  currentSlides = [];

  constructor(private carouselService: CarouselService) {}

  ngOnInit() {
    this.carouselService.getSlides(this.slides).subscribe((data: any) => {
      this.currentSlides = data;
    });
  }

  plusSlides(n) {
    this.currentSlideIndex += n;

    if (this.currentSlideIndex > this.currentSlides.length - 1) {
      this.currentSlideIndex = this.infinite
        ? 0
        : this.currentSlides.length - 1;
    }

    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = this.infinite
        ? this.currentSlides.length - 1
        : 0;
    }
  }
}
