import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){

    const gallery_categories = [
      {
        id: 1,
        name: 'Tipologia T3',
        active: false,
      },
      {
        id: 2,
        name: 'Tipologia T4A',
        active: false,
      },
      {
        id: 3,
        name: 'Tipologia T4B',
        active: false,
      },
      {
        id: 4,
        name: 'Interior',
        active: false,
      },
      {
        id: 5,
        name: 'Lazer',
        active: false,
      },
    ];

    const gallery = [
      {
        id: 1,
        title: 'Imagem de Piscina',
        category: 'Lazer',
        image: 'assets/images/gallery/leisure-1.jpg',
      },
      {
        id: 2,
        title: 'Imagem de um T4B',
        category: 'Tipologia T4B',
        image: 'assets/images/gallery/building-1.png'
      },
      {
        id: 3,
        title: 'Imagem de um T4A',
        category: 'Tipologia T4A',
        image: 'assets/images/gallery/building-2.png'
      },
      {
        id: 4,
        title: 'Imagem de um T4A',
        category: 'Tipologia T4A',
        image: 'assets/images/gallery/building-3.png'
      },
      {
        id: 5,
        title: 'Imagem de um T3',
        category: 'Tipologia T3',
        image: 'assets/images/gallery/building-4.png'
      },
      {
        id: 6,
        title: 'Imagem de um interior',
        category: 'Interior',
        image: 'assets/images/gallery/interior-1.png'
      },
      {
        id: 7,
        title: 'Imagem de um interior',
        category: 'Interior',
        image: 'assets/images/gallery/interior-2.png'
      },
      {
        id: 8,
        title: 'Imagem de um interior',
        category: 'Interior',
        image: 'assets/images/gallery/interior-3.png'
      },
      {
        id: 9,
        title: 'Imagem de um T4A à noite',
        category: 'Tipologia T4A',
        image: 'assets/images/gallery/building-5.png'
      },
      {
        id: 10,
        title: 'Imagem de Quadra',
        category: 'Lazer',
        image: 'assets/images/gallery/leisure-2.jpg',
      },
    ];

    return {gallery_categories, gallery};
  }
  
}
