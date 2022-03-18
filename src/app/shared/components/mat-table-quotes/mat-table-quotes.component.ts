import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mat-table-quotes',
  templateUrl: './mat-table-quotes.component.html',
  styleUrls: ['./mat-table-quotes.component.scss']
})
export class MatTableQuotesComponent implements OnInit {

  displayedColumns = [ 'subject_title', 'quote_message', 'quotePrice', 'quoteDate'];
  @Input() quoteDetails:any;

  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private router: Router){}

  ngOnInit(): void {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.quoteDetails);
    }, 10);
  }
  ngAfterViewInit(){
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 100);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onClickToOpen(val:any){
    const routerLink = '/quotes/' + val + '/details';
    this.router.navigate([routerLink]);
  }

}
