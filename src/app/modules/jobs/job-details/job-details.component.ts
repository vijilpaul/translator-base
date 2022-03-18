import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  jobDetails:any[] = [];
  quoteDetails:any[] = [];
  isLoggedIn:any;
  isAgency:any;
  isSubmittedQuote = false;
  quotedID:any;
  constructor(private apiService: ApiService, private route: ActivatedRoute, private vps: ViewportScroller) { }

  ngOnInit(): void {
    const transUserId = this.apiService.getAuthentication()[0].id;
    this.route.params.subscribe(params => {
      const jobID = params['id'];
      this.apiService.getJobsDetails().subscribe(jobs => jobs.filter(job => job.jobid == jobID).map((job: { languages: string; }) => {
        job.languages = JSON.parse(job.languages)
        this.jobDetails.push(job);
      }));
      this.apiService.getQuoteDetails().subscribe(quotes => quotes.filter(quote => {
        if(quote.jobID === jobID){
          const quoteData = quote;
          this.apiService.getUserDetails().subscribe(users => users.filter(user => {
            if(user.id === quoteData.userID){
              const alldetails = {
                userdetails:user,
                quotedetails: quoteData
              }
              this.quoteDetails.push(alldetails)
            }
          }));
          if(quote.userID === transUserId){
            this.isSubmittedQuote = true;
            this.quotedID = quote.quoteID;
          }
        }
      }));
    });
    setTimeout(() => {
      this.isLoggedIn = this.apiService.isLoggedIn();
      this.isCheckTranslatorOrAgency();
    }, 100);
  }
  isCheckTranslatorOrAgency(){
    const currentUser = this.apiService.getAuthentication();
    if(currentUser[0]){
        if(currentUser[0].account_type == 'agency'){
          this.isAgency = true;
        } else {
          this.isAgency = false;
        }
      }
  }
  onClickScroll(elementId:string):void{
    this.vps.scrollToAnchor(elementId);
  }

}
