import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-translator-details',
  templateUrl: './translator-details.component.html',
  styleUrls: ['./translator-details.component.scss']
})
export class TranslatorDetailsComponent implements OnInit {

  translatorDetails:any = [];
  // translatorID:any;
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let translatorID = params['id'];
      this.getTranslator(translatorID);
    });
  }
  getTranslator(id:any){
    //using async pipe to print it
    // this.translator = this.apiService.getUserDetails().pipe(
    //   map( users => users.filter(user => user.id == id) )
    // );
    this.apiService.getUserDetails().subscribe(users => users.filter(user => user.id == id).map((user: { languages: string; }) => {
      user.languages = JSON.parse(user.languages)
      this.translatorDetails.push(user);
    }));
  }

}
