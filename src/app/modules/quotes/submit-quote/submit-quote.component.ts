import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-submit-quote',
  templateUrl: './submit-quote.component.html',
  styleUrls: ['./submit-quote.component.scss']
})
export class SubmitQuoteComponent implements OnInit {

  jobDetails:any[] = [];
  userDetails:any;
  jobUserID:any;
  submitUserID:any;
  jobId:any;
  submitQuoteForm!: FormGroup;
  loading = false;
  submitted = false;
  message = "";
  subjectTitle:any;
  copyLeter = 'copy-yourself';
  profileLeter = 'profile-letter';
  isQuoted = false;
  
  constructor(private apiService: ApiService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobId = params['id'];
      this.apiService.getJobsDetails().subscribe(jobs => jobs.filter(job => job.jobid == this.jobId).map((job: { languages: string; }) => {
        job.languages = JSON.parse(job.languages)
        this.jobDetails.push(job);
        this.jobUserID = this.jobDetails[0].userid;
        this.subjectTitle = this.jobDetails[0].job_title;
      }));
      this.apiService.getUserDetails().subscribe(users => users.filter(user => {
        if(user.id === this.jobUserID){
          this.userDetails = user;
        }
      }));
    });
    this.submitQuoteForm = this.formBuilder.group({
      subject_title: ['', Validators.required],
      quote_message: ['', Validators.required],
      quotePrice: ['', Validators.required],
      profile_letter: ['true'],
      copy_letter: ['']
    });
    this.submitUserID = this.apiService.getAuthentication()[0].id;
    this.apiService.getQuoteDetails().subscribe(quote => quote.filter(x => {
      if(x.jobID === this.jobId && x.userID === this.submitUserID){
        this.isQuoted = true;
      }
    }))
  }
  get quote() { return this.submitQuoteForm.controls; }

  onChangeCopy(e:any){
    this.submitQuoteForm.value.copy_letter = this.copyLeter || null;
  }
  onChangeProfile(e:any){
    this.submitQuoteForm.value.profile_letter = this.profileLeter || null;
  }
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    if (this.submitQuoteForm.invalid) {
      this.loading = false;
        return;
    }
    if(this.submitQuoteForm.value.profile_letter){
      this.submitQuoteForm.value.profile_letter = this.profileLeter || null;
    }
    const setOtherValue = {
      jobID: this.jobId,
      userID: this.submitUserID
    }
    const formValues = Object.assign(this.submitQuoteForm.value, setOtherValue);

    let myFormData = new FormData();
      myFormData.append('subject_title', formValues.subject_title);
      myFormData.append('quote_message', formValues.quote_message);
      myFormData.append('quotePrice', formValues.quotePrice);
      myFormData.append('profile_letter', formValues.profile_letter);
      myFormData.append('copy_letter', formValues.copy_letter);
      myFormData.append('jobID', formValues.jobID);
      myFormData.append('userID', formValues.userID);
      this.apiService.postQuoteDetails(myFormData);
      this.message ="Quote is successfully submitted";
      setTimeout(() => {
        this.router.navigate(['/jobs']);
      }, 5000); 
  }

}
