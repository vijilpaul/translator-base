import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { QueryService } from 'src/app/core/query.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-job-form',
  templateUrl: './post-job-form.component.html',
  styleUrls: ['./post-job-form.component.scss'],
  providers: [DatePipe]
})
export class PostJobFormComponent implements OnInit {
  @Input() userId:any;
  jobTypes:any;
  personalDetails!: FormGroup;
  loading = false;
  submitted = false;
  message = "";
  deadlineDates:any;
  deadlineTime:any;
  subject_areas:any;
  languageList:any;
  sourceVal:any;
  targetVal:any;
  isSourceVal = false;
  isTargetVal = false;
  addedLanguages: Array<any> = [];
  sourceLanguage:any;
  targetLanguage:any;
  software:any;
  currencyList:any;

  constructor(private datePipe: DatePipe, private formBuilder: FormBuilder, private router: Router, private apiService: ApiService, private queryService: QueryService) { }

  ngOnInit(): void {
    this.jobTypes = this.queryService.jobTypes;
    this.languageList = this.queryService.languageList;
    this.subject_areas = this.queryService.subject_areas;
    this.software = this.queryService.software;
    this.currencyList = this.queryService.currency;

    this.personalDetails = this.formBuilder.group({
      job_title: ['', Validators.required],
      job_type: ['', Validators.required],
      explanation_option1: ['', Validators.required],
      explanation_option2: ['', Validators.required],
      deadline: ['', Validators.required],
      deadlinedate: [{value: '', disabled: false}, Validators.required], 
      deadlinetime: [{value: '', disabled: false}, Validators.required],
      source_language: [{value: '', disabled: false}, Validators.required],
      target_language: ['', Validators.required],
      job_description: ['', Validators.required],
      subject_areas: this.formBuilder.array([], [Validators.required]),
      software: this.formBuilder.array([], [Validators.required]),
      offered_value: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      currency_type: ['', Validators.required],
      rate_per: ['', Validators.required],
      country: ['', Validators.required],
      agree: [false, Validators.requiredTrue]
    });
    this.deadlineDates = this.personalDetails.get('deadlinedate') as FormArray;
    this.deadlineTime = this.personalDetails.get('deadlinetime') as FormArray;
    this.sourceLanguage = this.personalDetails.get('source_language') as FormArray;
    this.targetLanguage = this.personalDetails.get('target_language') as FormArray;
    this.deadlineTime.disable();
    this.deadlineDates.disable();

  }
  get personal() { return this.personalDetails.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    if (this.personalDetails.invalid) {
      this.loading = false;
        return;
    }
    this.personalDetails.value['deadlinedate'] = this.datePipe.transform(this.personal.deadlinedate.value, 'MM-dd-yyyy')
    const setLanguage = {
      languages: this.addedLanguages,
      userId: this.userId
    }
    const formValues = Object.assign(this.personalDetails.value, setLanguage);
    
    let myFormData = new FormData();
      myFormData.append('job_title', formValues.job_title);
      myFormData.append('job_type', formValues.job_type);
      myFormData.append('explanation_option1', formValues.explanation_option1);
      myFormData.append('explanation_option2', formValues.explanation_option2);
      myFormData.append('deadline', formValues.deadline);
      myFormData.append('deadlinedate', formValues.deadlinedate);
      myFormData.append('deadlinetime', formValues.deadlinetime);
      myFormData.append('languages', JSON.stringify(formValues.languages));
      myFormData.append('job_description', formValues.job_description.replace("'","\\'"));
      myFormData.append('subject_areas', formValues.subject_areas);
      myFormData.append('software', formValues.software);
      myFormData.append('offered_value', formValues.offered_value);
      myFormData.append('currency_type', formValues.currency_type);
      myFormData.append('rate_per', formValues.rate_per);
      myFormData.append('country', formValues.country);
      myFormData.append('agree', formValues.agree);
      myFormData.append('userId', formValues.userId);
      this.apiService.postJobsDetails(myFormData);
      this.message ="Job post is successfully submitted";
      setTimeout(() => {
        this.router.navigate(['/jobs/myjobs']);
      }, 5000); 
  }
  onDateChange(e:any){
    if(e.value === "Deadline date"){
      this.deadlineTime.enable();
      this.deadlineDates.enable();
    } else{
      this.deadlineTime.disable();
      this.deadlineDates.disable();
    }
  }
  onClickAddLanguage(){
    if (this.sourceLanguage.invalid) {
      this.isSourceVal = true;
      return;
    }
    if (this.targetLanguage.invalid) {
      this.isTargetVal = true;
      return;
    }
    this.sourceVal = this.sourceLanguage.value;
    this.targetVal = this.targetLanguage.value;
    if(this.sourceVal === this.targetVal){
      this.isSourceVal = true;
      this.sourceLanguage.setErrors({'matchLanguage': true});
      return
    }
    if(this.sourceVal && this.targetVal){
      const list = {
        source: this.sourceVal,
        target: this.targetVal,
      };
      const found = this.addedLanguages.some(el => el.source === this.sourceVal && el.target === this.targetVal);
      if(!found){
        this.addedLanguages.push(list);
      }
    }
  }
  onClickDelete(i:any){
    this.addedLanguages.splice(i, 1);
  }
  onChangeSubject(e:any) {
    const checkboxArrayList: FormArray = this.personalDetails.get('subject_areas') as FormArray;
    this.apiService.checkboxValidation(e, checkboxArrayList);
  }
  onChangeSoftware(e:any){
    const checkboxArrayList: FormArray = this.personalDetails.get('software') as FormArray;
    this.apiService.checkboxValidation(e, checkboxArrayList);
  }

}
