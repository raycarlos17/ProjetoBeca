import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AdminService } from '../shared/admin.service';
import { DataSource } from '@angular/cdk/table';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Sugestion } from 'src/app/sugestion/model/sugestion.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  displayedColumns: string[] = ['numero', 'name', 'email', 'date', 'type', 'description', 'imagens', 'excluir'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  registros: any;
  posicaoImagens: any;
  Sugestion$:Observable<Sugestion[]>


  constructor(private adminService: AdminService,   ) { }

  ngOnInit(): void {
    //this.dataSource.paginator = this.paginator;
    //this.registros = this.dataSource.data
   this.adminService.get().subscribe((u) => {
      console.log(u)
    })

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();

   // if (this.dataSource.paginator) {
   //   this.dataSource.paginator.firstPage();
   // }
  }

  deleteOcorrencias(arrayOcorrencias, element)  {
    let posicao = arrayOcorrencias.data.indexOf(element);
    arrayOcorrencias.data.splice(posicao, 1);
    //this.dataSource = new MatTableDataSource<PeriodicElement>(arrayOcorrencias.data);
  }

  redirecionaImagens(arrayOcorrencias, element){
    let posicao = arrayOcorrencias.data.indexOf(element);
    this.posicaoImagens = posicao
   // this.adminService.registros = this.registros[this.posicaoImagens];
  }

  delete(key: string) {
    this.adminService.delete(key)
  }



}




