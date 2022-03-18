import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss']
})
export class QuotesListComponent implements OnInit {

  quoteDetails:any;
  userId:any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.userId = this.apiService.getAuthentication()[0].id;
    this.apiService.getQuoteDetails().subscribe(quotes => this.quoteDetails = quotes);
  }

}
