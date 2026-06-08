import { Component } from '@angular/core';
import { QuickContact } from './components/quick-contact/quick-contact';
import { Info } from './components/info/info';
import { Map } from './components/map/map';

@Component({
  selector: 'app-contact',
  imports: [QuickContact, Info, Map],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export default class Contact {}
