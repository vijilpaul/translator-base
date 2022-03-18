import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { QueryService } from 'src/app/core/query.service';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.scss'],
  providers: [DatePipe]
})
export class JobEditComponent implements OnInit {

  jobTypes:any;
  jobDetailsForm!: FormGroup;
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
  softwareCheckedlist:any = FormArray;
  subjectCheckedlist:any = FormArray;
  jobid:any;
  userId:any;

  constructor(private route: ActivatedRoute, private datePipe: DatePipe, private formBuilder: FormBuilder, private router: Router, private apiService: ApiService, private queryService: QueryService) { }

  ngOnInit(): void {
    this.jobTypes = this.queryService.jobTypes;
    this.languageList = this.queryService.languageList;
    this.subject_areas = this.queryService.subject_areas;
    this.software = this.queryService.software;
    this.currencyList = this.queryService.currency;

    this.jobDetailsForm = this.formBuilder.group({
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
      country: ['', Validators.required]
    });
    this.deadlineDates = this.jobDetailsForm.get('deadlinedate') as FormArray;
    this.deadlineTime = this.jobDetailsForm.get('deadlinetime') as FormArray;
    this.sourceLanguage = this.jobDetailsForm.get('source_language') as FormArray;
    this.targetLanguage = this.jobDetailsForm.get('target_language') as FormArray;
    this.softwareCheckedlist = this.jobDetailsForm.get('software') as FormArray;
    this.subjectCheckedlist = this.jobDetailsForm.get('subject_areas') as FormArray;

    this.deadlineTime.disable();
    this.deadlineDates.disable();
    this.route.params.subscribe(params => {
      this.jobid = params['id'];
      this.apiService.getJobsDetails().subscribe(jobs => { 
        const jobDetails = jobs.filter(job => job.jobid === this.jobid);
        const langParse = JSON.parse(jobDetails[0].languages);
        jobDetails[0].languages = langParse;
        this.addedLanguages = jobDetails[0].languages;
        this.updateJobForm(jobDetails[0]);
        })
    });
    const currentUser = this.apiService.getAuthentication();
    if(currentUser[0]){
      if(currentUser[0].account_type == 'agency'){
        this.userId = currentUser[0].id;
      }
    }
  }
  get jobs() { return this.jobDetailsForm.controls; }

  updateJobForm(data:any){
    let softwareValue = data.software.split(",");
    let subjectValue = data.subject_areas.split(",");
    let date = new Date(data.deadlinedate);
    this.jobDetailsForm.patchValue({
      job_title: data.job_title,
      job_type: data.job_type,
      explanation_option1: data.explanation_option1,
      explanation_option2: data.explanation_option2,
      deadline: data.deadline,
      deadlinedate: date, 
      deadlinetime: data.deadlinetime,
      source_language: data.languages[0].source,
      target_language: data.languages[0].target,
      job_description: data.job_description,
      offered_value: data.offered_value,
      currency_type: data.currency_type,
      rate_per: data.rate_per,
      country: data.country
    });
    this.apiService.onLoadCheckedValueSet(this.software, softwareValue, this.softwareCheckedlist);
    this.apiService.onLoadCheckedValueSet(this.subject_areas, subjectValue, this.subjectCheckedlist);
    this.setDeadline(data.deadline);
  }
  onChangeSubject(e:any) {
    this.apiService.checkboxValidation(e, this.subjectCheckedlist);
  }
  onChangeSoftware(e:any){
    this.apiService.checkboxValidation(e, this.softwareCheckedlist);
  }
  onDateChange(e:any){
    this.setDeadline(e.value);
  }
  setDeadline(val:any){
    if(val === "Set date"){
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
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    if (this.jobDetailsForm.invalid) {
      this.loading = false;
        return;
    }
    if(this.jobDetailsForm.value['deadlinedate']){
      this.jobDetailsForm.value['deadlinedate'] = this.datePipe.transform(this.jobs.deadlinedate.value, 'MM-dd-yyyy')
    }
    const setOtherValue = {
      languages: this.addedLanguages,
      jobid: this.jobid,
      userId: this.userId
    }
    const formValues = Object.assign(this.jobDetailsForm.value, setOtherValue);
    if(this.userId){
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
        myFormData.append('jobid', formValues.jobid);
        myFormData.append('userId', formValues.userId);
        this.apiService.updateJobsDetails(myFormData);
        this.message ="Job details is successfully updated";
        setTimeout(() => {
          this.router.navigate(['/jobs/'+ this.jobid +'/details']);
        }, 5000); 
    }
  }  
}
