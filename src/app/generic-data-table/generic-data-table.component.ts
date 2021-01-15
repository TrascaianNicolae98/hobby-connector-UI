import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GenericDataTableDataSource, GenericDataTableItem } from './generic-data-table-datasource';

@Component({
  selector: 'app-generic-data-table',
  templateUrl: './generic-data-table.component.html',
  styleUrls: ['./generic-data-table.component.css']
})
export class GenericDataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<GenericDataTableItem>;
  dataSource: GenericDataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','email'];

  ngOnInit() {
    this.dataSource = new GenericDataTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
