import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LangToggle } from '../../components/lang-toggle/lang-toggle';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, LangToggle, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
