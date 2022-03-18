import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mat-table-jobs',
  templateUrl: './mat-table-jobs.component.html',
  styleUrls: ['./mat-table-jobs.component.scss']
})
export class MatTableJobsComponent implements OnInit {

  displayedColumns = ['job_type', 'languages', 'date', 'jobid'];
  @Input() jobDetails:any;

  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.jobDetails);
    }, 0);
    
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
}
