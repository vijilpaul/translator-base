import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @Input() userDetails: any[] = [];
  @Input() userType: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
