import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { QueryService } from 'src/app/core/query.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  otherDetails!: FormGroup;
  personal_step = false;
  address_step = false;
  other_step = false;
  step = 1;
  sourceVal:any;
  targetVal:any;
  isSourceVal = false;
  isTargetVal = false;
  isNotSelectLanguage = false;
  languageRequired = false;
  seviceList:any;
  expertise:any;
  software:any;
  languageList:any;
  subject_areas:any;
  message ="";

  addedLanguages: Array<any> = [];
  
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService, private queryService: QueryService) { }

  ngOnInit() {
    
    this.seviceList = this.queryService.seviceList;
    this.expertise = this.queryService.expertise;
    this.software = this.queryService.software;
    this.languageList = this.queryService.languageList;
    this.subject_areas = this.queryService.subject_areas;

    this.personalDetails = this.formBuilder.group({
      account_type: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],this.apiService.userValidator('email')],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: ['', Validators.compose([ Validators.required, Validators.minLength(3)],),this.apiService.userValidator('username')],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]],
      }, {
      validator: this.apiService.mustMatch('password', 'confirm_password')
    });
    this.addressDetails = this.formBuilder.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        address: ['', Validators.required],
        postal_code: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(8), Validators.pattern('^[a-zA-Z0-9]*$')]],
        country: ['', Validators.required],
        phone_number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12), Validators.pattern('^[0-9]*$')]],
        mobile_number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12), Validators.pattern('^[0-9]*$')]],
        fax_number: [''],
    });
    this.otherDetails = this.formBuilder.group({
      services: this.formBuilder.array([], [Validators.required]),
      subject_areas: this.formBuilder.array([], [Validators.required]),
      expertise: this.formBuilder.array([], [Validators.required]),
      software: this.formBuilder.array([], [Validators.required]),
      native_language: ['', Validators.required],
      summary: ['', Validators.required],
      agree_terms: [false, Validators.requiredTrue],
    });
  }

  get personal() { return this.personalDetails.controls; }
  get address() { return this.addressDetails.controls; }
  get others() { return this.otherDetails.controls; }

  onChangeServices(e:any, i:any) {
    const checkboxArrayList: FormArray = this.otherDetails.get('services') as FormArray;
    this.seviceList[i].checked = e.target.checked;
    this.apiService.updateCheckControl(checkboxArrayList, e.target);
  }
  onChangeSubject(e:any, i:any) {
    const checkboxArrayList: FormArray = this.otherDetails.get('subject_areas') as FormArray;
    this.subject_areas[i].checked = e.target.checked;
    this.apiService.updateCheckControl(checkboxArrayList, e.target);
  }
  onChangeExpertise(e:any, i:any) {
    const checkboxArrayList: FormArray = this.otherDetails.get('expertise') as FormArray;
    this.expertise[i].checked = e.target.checked;
    this.apiService.updateCheckControl(checkboxArrayList, e.target);
  }
  onChangeSoftware(e:any, i:any) {
    const checkboxArrayList: FormArray = this.otherDetails.get('software') as FormArray;
    this.software[i].checked = e.target.checked;
    this.apiService.updateCheckControl(checkboxArrayList, e.target);
  }
  
  onChangeSource(e:any){
    this.sourceVal = e.target.value;
    if(this.sourceVal){
      this.isSourceVal = false;
    }
    if(this.sourceVal === this.targetVal){
      this.isTargetVal = true;
    }
  }
  onChangeTarget(e:any){
    this.targetVal = e.target.value;
    if(!this.sourceVal){
      this.isSourceVal = true;
    }
    if(this.sourceVal === this.targetVal){
      this.isTargetVal = true;
      return
    } else{
      this.isTargetVal = false;
      this.isNotSelectLanguage = false;
    }
  }
  onClickAddLanguage(){
    if(this.sourceVal && this.targetVal){
      const list = {
        source: this.sourceVal,
        target: this.targetVal,
      };
      const found = this.addedLanguages.some(el => el.source === this.sourceVal && el.target === this.targetVal);
      if(!found){
        this.addedLanguages.push(list);
      }
    } else{
      this.isNotSelectLanguage = true;
    }
    if (this.addedLanguages.length > 0) { 
      this.languageRequired = false;
    }
  }
  onClickDelete(i:any){
    this.addedLanguages.splice(i, 1);
    if (this.addedLanguages.length == 0) { 
      this.languageRequired = true;
    }
  }
  next(){
    if(this.step==2){
      this.address_step = true;
      if (this.addressDetails.invalid) { return }
          this.step++;
      window.scrollTo(0, 0);
    }
    if(this.step==1){
          this.personal_step = true;
          if (this.personalDetails.invalid) { return  }
          this.step++
      window.scrollTo(0, 0);
    }
  }
  previous(){
    this.step--
    if(this.step==1){
      this.personal_step = false;
    }
    if(this.step==2){
      this.other_step = false;
    }
    window.scrollTo(0, 0);
  }
  submit(){
    if(this.step==3){
      this.other_step = true;
      this.languageRequired = true;
      if (this.otherDetails.invalid) { return }
      if (this.addedLanguages.length < 1) { 
        this.isNotSelectLanguage = true;
        return 
      }
    }
    const setLanguage = {
      languages: this.addedLanguages
    }
    const formValues = Object.assign(this.otherDetails.value, this.personalDetails.value, this.addressDetails.value, setLanguage);
    this.apiService.postUserDetails(formValues);
    window.scrollTo(0, 0);
      this.message ="Register successfully submitted";
      setTimeout(() => {
        this.router.navigate(['/user/login']);
      }, 5000); 
  }
}
