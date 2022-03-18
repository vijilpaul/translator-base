import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  menuLinks = [
    { title: 'Dashboard', link: 'overview' },
    { title: 'Gold Details', link: 'gold-data' },
    { title: 'Silver Details', link: 'silver-data' },
    { title: 'Petrol Details', link: 'petrol-data' },
    { title: 'Diesel Details', link: 'diesel-data' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
