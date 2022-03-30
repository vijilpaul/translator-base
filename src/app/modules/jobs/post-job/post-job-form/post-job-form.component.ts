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
  notificationDetails:any

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
    this.personalDetails.value['deadlinedate'] = this.datePipe.transform(this.personal.deadlinedate.value, 'MM-dd-yyyy');
    const job_id = this.personalDetails.value.job_title.replace(/\s+/g, '-').toLowerCase();
    const setLanguage = {
      languages: this.addedLanguages,
      userId: this.userId,
      jobId: job_id
    }
    const formValues = Object.assign(this.personalDetails.value, setLanguage);

    this.apiService.postJobsDetails(formValues);
    this.notificationDetails = {
      message: "Job post is successfully submitted",
      popupShow: true,
      popupShowBg: 'success'
    }
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
  popupNotification(event: any){
    console.log(event)
  }

}
