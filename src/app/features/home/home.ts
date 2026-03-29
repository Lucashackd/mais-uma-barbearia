import { Component } from '@angular/core';
import {Hero} from './components/hero/hero';
import {About} from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Portfolio],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {}
