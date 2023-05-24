import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InMemoryDataService } from './api/in-memory-data.service';
import { CATEGORIES } from './api/mock/mock-categories';
import { GALLERY } from './api/mock/mock-gallery';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private mock: InMemoryDataService
  ) { }

  imagesOnSlide_banner_home: any[] = [
    {
      id: 1,
      title: 'Imagem de Banner',
      image: 'assets/images/banner/bnr-1.jpg',
      primary: true,
    },
    {
      id: 2,
      title: 'Imagem de Banner',
      image: 'assets/images/banner/bnr-2.jpg',
      primary: false,
    },
    {
      id: 3,
      title: 'Imagem de Banner',
      image: 'assets/images/banner/bnr-3.jpg',
      primary: false,
    },
  ];

  get_gallery_categories(): Observable<any[]>{
    // return this.http.get('api/gallery_categories');
    // return this.mock.mock_categories_gallery;

    const categories = of(CATEGORIES);
    return categories;
  }

  get_gallery(){
    // return this.http.get('api/gallery');
    // return this.mock.mock_gallery;

    const gallery = of(GALLERY);
    return gallery;
  }

  scheduleVisit(data: any){
    return this.http.post<any>(environment.send_email_api, data);
  }
}
