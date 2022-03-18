import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from  'rxjs';
import { Register } from './register-model';
import { AsyncValidatorFn, AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { map, switchMap  } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Jobs } from './jobs-model';
import { Quote } from './quote-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiLocalUrl = 'http://localhost/translator-db/';
  apiDetails:any;
  constructor(private http: HttpClient, private router: Router) {
  }

  getUserDetails(){
    return this.http.get<Register[]>(this.apiLocalUrl + 'user-list.php');
  }
  
  getRegisterDetails(){
    let headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get(this.apiLocalUrl + 'user-list.php', {headers: headers});
  }
  postRegisterDetails(registerData:any){
    return this.http.post<Register>(this.apiLocalUrl + 'user-register.php', registerData).subscribe((res: Register) => {})
  }
  updateUser(value:any) {
    return this.http.post<Register>(this.apiLocalUrl + 'user-edit.php', value).subscribe((res: Register) => {});
  }
  checkloginDetails(){
    let headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get(this.apiLocalUrl + 'user-list.php');
  }
  //Existing user validation
  userValidator(val:any): AsyncValidatorFn {
    return (control: AbstractControl): Observable<any> => {
      return this.http.get<any>(this.apiLocalUrl + 'user-list.php').pipe(
        map((users: Register[]) => {
          if(val == 'username'){
            const isWhitespace = (control.value || '').match(/\s/g);
            let fl = users.filter(p => p.username === control.value);
            if(isWhitespace){
              return { 'whitespace': true };
            }
            if (fl.length>0) {
              return { 'userNameExists': true};
            }
          } else if(val == 'email'){
            let email = users.filter(p => p.email === control.value);
            if (email.length>0) {
              return { 'userEmailExists': true};
            }
          }
          return undefined
        }))
    };
  }
  //Password matching check
  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {return;}
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }
  //Checkbox validation
  updateCheckControl(cal:any, o:any) {
    if (o.checked) {
      cal.push(new FormControl(o.value));
    } else {
      cal.controls.forEach((item: FormControl, index:any) => {
        if (item.value == o.value) {
          cal.removeAt(index);
          return;
        }
      });
    }
  }

  login(username: string, password: string) {
    return this.http.get<any>(this.apiLocalUrl + 'user-list.php').subscribe(users => {
      let userLogin = users.filter((user: { username: string; password: string; }) => username === user.username && password === user.password);
        if(userLogin.length > 0){
          localStorage.setItem('currentUser', JSON.stringify(userLogin));
        }
    })
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  getAuthentication() {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/user/login']);
  }

  getJobsDetails(){
    return this.http.get<Jobs[]>(this.apiLocalUrl + 'job-list.php');
  }
  postJobsDetails(jobData:any){
    return this.http.post<Jobs>(this.apiLocalUrl + 'job-post.php', jobData).subscribe((res: Jobs) => {})
  }
  updateJobsDetails(value:any) {
    return this.http.post<Jobs>(this.apiLocalUrl + 'job-edit.php', value).subscribe((res: Jobs) => {});
  }
  getQuoteDetails(){
    return this.http.get<Quote[]>(this.apiLocalUrl + 'quote-list.php');
  }
  postQuoteDetails(quoteData:any){
    return this.http.post<Quote>(this.apiLocalUrl + 'quote-post.php', quoteData).subscribe((res: Quote) => {})
  }

  checkboxValidation(e:any, checkboxArrayList:any){
    if(e.checked) {
      checkboxArrayList.push(new FormControl(e.source.value))
    } else {
      const i = checkboxArrayList.controls.findIndex((x:any) => x.value === e.source.value);
      checkboxArrayList.removeAt(i);
    }
  }
  onLoadCheckedValueSet(listArr:any, checkedList:any, storeList:any){
    listArr.map((x:any) => {
      const newVal = checkedList.findIndex((s:any) => s === x.value) !== -1;
      if(newVal){
          storeList.push(new FormControl(x.value));
          return x.checked = true;
        } else{
          return x.checked = false;
        }
    });
  }
}
