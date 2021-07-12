import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  constructor(private http: HttpClient) {}

  getSlides(numberOfSlides: number) {
    return this.http.get(
      `${environment.baseurl}/carousel?slides=${numberOfSlides}`
    );
  }
}
