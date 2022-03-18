import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.scss']
})
export class QuotesDetailsComponent implements OnInit {

  quoteDetails:any = [];
  contactDetails:any;
  isAgency:any
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let quoteId = params['id'];
      this.apiService.getQuoteDetails().subscribe(quotes => quotes.filter(quote => quote.quoteID == quoteId).map((item: any) => {
        this.quoteDetails.push(item);
      }));
    });
    this.apiService.getUserDetails().subscribe(user => this.contactDetails = user);
    const currentUser = this.apiService.getAuthentication();
    if(currentUser[0]){
        if(currentUser[0].account_type == 'agency'){
          this.isAgency = true;
        } else {
          this.isAgency = false;
        }
      }
  }

}
