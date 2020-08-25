import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  displayedColumns: string[] = ['numero', 'name', 'email', 'date', 'type', 'description'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  checkNumero: boolean = false;
  checkName: boolean = false;
  checkEmail: boolean = false;
  checkDate: boolean = false;
  checkType: boolean = false;
  checkDescription: boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}

export interface PeriodicElement {
  numero: number;
  name: string;
  email: string;
  date: String;
  type: string;
  description: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {numero: 1, name: 'Ray', email: 'raycarlos17@gmail.com', date: '24/08/2020', type: 'Sugestão', 
  description: 'Colocar mais equipamentos'},
];