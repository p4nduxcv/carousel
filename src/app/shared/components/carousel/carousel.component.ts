import { Component, Input, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
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
}
