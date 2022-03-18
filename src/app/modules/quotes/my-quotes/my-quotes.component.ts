import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-my-quotes',
  templateUrl: './my-quotes.component.html',
  styleUrls: ['./my-quotes.component.scss']
})
export class MyQuotesComponent implements OnInit {

  @Input() count: any = 100;
  userId: any;
  quoteDetails:any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.userId = this.apiService.getAuthentication()[0].id;
    this.apiService.getQuoteDetails().pipe(
      map(pages => pages.filter((page) => page.userID === this.userId))).subscribe(quotes => this.quoteDetails = quotes);
  }

}
