import { keyframes } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../../core/api.service';
import { QueryService } from '../../../../core/query.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  @Input() profileDetails: any;
  @Output() saveform = new EventEmitter();
  personalDetails: any;
  addressDetails: any;
  otherDetails: any;
  personal_step = false;
  address_step = false;
  other_step = false;
  step = 1;
  sourceVal: any;
  targetVal: any;
  isSourceVal = false;
  isTargetVal = false;
  isNotSelectLanguage = false;
  languageRequired = false;
  seviceList: any;
  expertiseList: any;
  softwareList: any;
  languageList: any;
  subjectAreaList: any;
  message = "";
  accountType: any;

  addedLanguages: Array<any> = [];
  servicesCheckedVal: any;
  subjectAreaCheckedVal: any;
  expertiseCheckedVal: any;
  softwareCheckedVal: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService, private queryService: QueryService) { }

  ngOnInit(): void {
    this.seviceList = this.queryService.seviceList;
    this.expertiseList = this.queryService.expertise;
    this.softwareList = this.queryService.software;
    this.languageList = this.queryService.languageList;
    this.subjectAreaList = this.queryService.subject_areas;

    this.personalDetails = this.formBuilder.group({
      account_type: ['', Validators.required],
      email: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: ['', Validators.required]
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

    this.servicesCheckedVal = this.profileDetails[0].services.split(",");
    this.subjectAreaCheckedVal = this.profileDetails[0].subject_areas.split(",");
    this.expertiseCheckedVal = this.profileDetails[0].expertise.split(",");
    this.softwareCheckedVal = this.profileDetails[0].software.split(",");
    this.otherDetails = this.formBuilder.group({
      services: this.formBuilder.array(this.seviceList.map((x: any) => this.servicesCheckedVal.indexOf(x.value) > -1)),
      subject_areas: this.formBuilder.array(this.subjectAreaList.map((x: any) => this.subjectAreaCheckedVal.indexOf(x.value) > -1)),
      expertise: this.formBuilder.array(this.expertiseList.map((x: any) => this.expertiseCheckedVal.indexOf(x.value) > -1)),
      software: this.formBuilder.array(this.softwareList.map((x: any) => this.softwareCheckedVal.indexOf(x.value) > -1)),
      native_language: ['', Validators.required],
      summary: ['', Validators.required]
    });
    this.editProfileForm();
  }
  get personal() { return this.personalDetails.controls; }
  get address() { return this.addressDetails.controls; }
  get others() { return this.otherDetails.controls; }

  //edit and profile updates for DB datas
  editProfileForm() {
    const profileEditData = this.profileDetails[0];
    this.addedLanguages = profileEditData.languages;
    if (profileEditData.account_type === "agency") {
      this.accountType = 'Translation agency/company employee or owner'
    } else if (profileEditData.account_type === "translator") {
      this.accountType = 'Freelance translator and/or interpreter'
    }
    this.personalDetails.patchValue({
      account_type: this.accountType,
      first_name: profileEditData.first_name,
      last_name: profileEditData.last_name,
      username: profileEditData.username,
      email: profileEditData.email
    });
    this.addressDetails.patchValue({
      city: profileEditData.city,
      state: profileEditData.state,
      address: profileEditData.address,
      postal_code: profileEditData.postal_code,
      country: profileEditData.country,
      phone_number: profileEditData.phone_number,
      mobile_number: profileEditData.mobile_number,
      fax_number: profileEditData.fax_number,
    });
    this.otherDetails.patchValue({
      native_language: profileEditData.native_language,
      summary: profileEditData.summary,
    });
  }

  // start language choose section
  onChangeSource(e: any) {
    this.sourceVal = e.target.value;
    if (this.sourceVal) {
      this.isSourceVal = false;
    }
    if (this.sourceVal === this.targetVal) {
      this.isTargetVal = true;
    }
  }

  onChangeTarget(e: any) {
    this.targetVal = e.target.value;
    if (!this.sourceVal) {
      this.isSourceVal = true;
    }
    if (this.sourceVal === this.targetVal) {
      this.isTargetVal = true;
      return
    } else {
      this.isTargetVal = false;
      this.isNotSelectLanguage = false;
    }
  }
  onClickAddLanguage() {
    if (this.sourceVal && this.targetVal) {
      const list = {
        source: this.sourceVal,
        target: this.targetVal,
      };
      const found = this.addedLanguages.some(el => el.source === this.sourceVal && el.target === this.targetVal);
      if (!found) {
        this.addedLanguages.push(list);
      }
    } else {
      this.isNotSelectLanguage = true;
    }
    if (this.addedLanguages.length > 0) {
      this.languageRequired = false;
    }
  }
  onClickDelete(i: any) {
    this.addedLanguages.splice(i, 1);
    if (this.addedLanguages.length == 0) {
      this.languageRequired = true;
    }
  }
  // end language choose section

  //Next form set and validation
  next() {
    if (this.step == 2) {
      this.address_step = true;
      if (this.addressDetails.invalid) { return }
      this.step++;
    }
    if (this.step == 1) {
      this.personal_step = true;
      if (this.personalDetails.invalid) { return }
      this.step++
    }
    window.scrollTo(0, 0);
  }
  //previous form validation and data
  previous() {
    this.step--
    if (this.step == 1) {
      this.personal_step = false;
    }
    if (this.step == 2) {
      this.other_step = false;
    }
    window.scrollTo(0, 0);
  }

  //checkbox true are converted its values
  convertToValue(keys: string, list: any) {
    return this.otherDetails.value[keys].map((x: any, i: number) => x && list[i].value).filter((x: any) => !!x);
  }
  //submit the form data
  submit() {
    if (this.step == 3) {
      this.other_step = true;
      this.languageRequired = true;
      if (this.otherDetails.invalid) { return }
      if (this.addedLanguages.length < 1) {
        this.isNotSelectLanguage = true;
        return
      }
    }
    const otherFormValues = Object.assign({}, this.otherDetails.value, {
      services: this.convertToValue('services', this.seviceList),
      subject_areas: this.convertToValue('subject_areas', this.subjectAreaList),
      expertise: this.convertToValue('expertise', this.expertiseList),
      software: this.convertToValue('software', this.softwareList),
      languages: this.addedLanguages
    });
    const formValues = Object.assign(this.personalDetails.value, this.addressDetails.value, otherFormValues);

    let myFormData = new FormData();
    myFormData.append('id', this.profileDetails[0].id);
    myFormData.append('first_name', formValues.first_name);
    myFormData.append('last_name', formValues.last_name);
    myFormData.append('phone_number', formValues.phone_number);
    myFormData.append('mobile_number', formValues.mobile_number);
    myFormData.append('fax_number', formValues.fax_number);
    myFormData.append('address', formValues.address);
    myFormData.append('city', formValues.city);
    myFormData.append('state', formValues.state);
    myFormData.append('country', formValues.country);
    myFormData.append('postal_code', formValues.postal_code);
    myFormData.append('services', formValues.services);
    myFormData.append('languages', JSON.stringify(formValues.languages));
    myFormData.append('subject_areas', formValues.subject_areas);
    myFormData.append('expertise', formValues.expertise);
    myFormData.append('software', formValues.software);
    myFormData.append('native_language', formValues.native_language);
    myFormData.append('summary', formValues.summary);
    this.apiService.updateUser(myFormData);
    window.scrollTo(0, 0);
    this.message = "Profile updates successfully submitted";
    setTimeout(() => {
      this.saveform.emit(false);
    }, 5000);
  }
}
