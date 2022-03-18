import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/api.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

}
