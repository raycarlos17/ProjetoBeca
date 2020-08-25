import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }


}

export interface PeriodicElement {
  position: number;
  name: string;
  email: string;
  date: String;
  type: string;
  description: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ray', email: 'raycarlos17@gmail.com', date: '24/08/2020', type: 'Sugestão', 
  description: 'Colocar mais equipamentos'},
];