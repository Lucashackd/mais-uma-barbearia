import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

export interface PortfolioItem {
  id: number;
  src: string;
  altText: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [NgOptimizedImage],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  images: PortfolioItem[] = [
    { id: 1, src: '/images/portfolio/barba.webp', altText: 'Barba' },
    { id: 2, src: '/images/portfolio/barbaEstilizada.webp', altText: 'Barba Estilizada' },
    { id: 3, src: '/images/portfolio/combo.webp', altText: 'Combo' },
    { id: 4, src: '/images/portfolio/moderno.webp', altText: 'Corte moderno' },
    { id: 5, src: '/images/portfolio/pompadour.webp', altText: 'Corte pompadour' },
    { id: 6, src: '/images/portfolio/tradicional.webp', altText: 'Corte tradicional' },
  ];
}
