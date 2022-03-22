import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from  'rxjs';
import { Register } from './register-model';
import { AsyncValidatorFn, AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { map, switchMap  } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Jobs } from './jobs-model';
import { Quote } from './quote-model';
import { Database, ref, set, get, child, update } from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiLocalUrl = 'https://translator-base-default-rtdb.firebaseio.com/';
  apiDetails:any;
  constructor(private http: HttpClient, private router: Router, private db: Database) {
  }

  getUserDetails(){
    // const starCountRef = ref(this.db, 'user-list/');
    // return onValue(starCountRef, (snapshot) => snapshot.val());
    return this.http.get<Register[]>(this.apiLocalUrl + 'user-list.json');
    // return this.http.get<Register[]>(this.apiLocalUrl + 'user-list.json');
  }
  getUsers(username:any){
    const dbRef = ref(this.db, 'user-list/');
    return get(child(dbRef, username))
  }
  
  postUserDetails(registerData:any){
    return set(ref(this.db, 'user-list/' + registerData.username), registerData);
  }
  updateUser(updateData:any) {
    return update(ref(this.db, 'user-list/' + updateData.username), updateData);
  }
  checkloginDetails(){
    let headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get(this.apiLocalUrl + 'user-list.json');
  }
  //Existing user validation
  userValidator(val:any): AsyncValidatorFn {
    return (control: AbstractControl): Observable<any> => {
      return this.http.get<any>(this.apiLocalUrl + 'user-list.json').pipe(
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
    return this.getUsers(username).then((snapshot) => {
      if (snapshot.exists() && snapshot.val().password === password) {
        console.log(snapshot.val());
        localStorage.setItem('currentUser', JSON.stringify(snapshot.val()));
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
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
