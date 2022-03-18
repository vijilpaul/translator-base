import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  links = [
    { title: 'Home', link: 'home' },
    { title: 'Gold', link: 'gold' },
    { title: 'Silver', link: 'silver' },
    { title: 'Contact Us', link: 'contact-us' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
