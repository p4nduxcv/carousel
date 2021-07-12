import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  constructor(private http: HttpClient) {}

  /**
   *
   * @param numberOfSlides get how much of slide need to be displayed
   * @returns call endpoint of NodeJS API
   */
  getSlides(numberOfSlides: number) {
    return this.http.get(
      `${environment.baseurl}/carousel?slides=${numberOfSlides}`
    );
  }
}
