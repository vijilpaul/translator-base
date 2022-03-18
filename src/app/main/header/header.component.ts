import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn:any;
  isTranslator = true;
  isAgency = true;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  onLogout() {
    this.apiService.logout();
    this.isTranslator = true;
    this.isAgency = true;
  }
  ngDoCheck() {
    this.isLoggedIn = this.apiService.isLoggedIn();
    this.isCheckTranslatorOrAgency();
  }
  isCheckTranslatorOrAgency(){
    const currentUser = this.apiService.getAuthentication();
    if(currentUser[0]){
        if(currentUser[0].account_type == 'translator'){
          this.isAgency = false;
          this.isTranslator = true;
        } else {
          this.isTranslator = false;
          this.isAgency = true;
        }
      }
  }

}
