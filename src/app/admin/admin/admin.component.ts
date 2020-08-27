import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AdminService } from '../shared/admin.service';
import { DataSource } from '@angular/cdk/table';
import { AngularFireDatabase } from '@angular/fire/database';
 
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  displayedColumns: string[] = ['numero', 'name', 'email', 'date', 'type', 'description', 'imagens', 'excluir'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  registros: any;
  posicaoImagens: any;
 

  constructor(private adminService: AdminService, private angularFireDataBase: AngularFireDatabase  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.registros = this.dataSource.data
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteOcorrencias(arrayOcorrencias, element)  {
    let posicao = arrayOcorrencias.data.indexOf(element);
    arrayOcorrencias.data.splice(posicao, 1);
    this.dataSource = new MatTableDataSource<PeriodicElement>(arrayOcorrencias.data);
  }

  redirecionaImagens(arrayOcorrencias, element){
    let posicao = arrayOcorrencias.data.indexOf(element);
    this.posicaoImagens = posicao
    this.adminService.registros = this.registros[this.posicaoImagens];
  }


}

export interface PeriodicElement {
  numero: number;
  name: string;
  email: string;
  date: String;
  type: string;
  description: string;
  imagem: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {numero: 1, name: 'Ray', email: 'raycarlos17@gmail.com', date: '23/08/2020', type: 'Sugestão', 
  description: 'Colocar mais equipamentos', imagem: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Outdoor_gym_in_Parque_de_Bateria%2C_Torremolinos.JPG'},
  {numero: 2, name: 'Carlos', email: 'carlos@gmail.com', date: '22/08/2020', type: 'Reclamação', 
  description: 'Equipamentos quebrados', imagem: null},
  {numero: 3, name: 'Felipe', email: 'felipe@gmail.com', date: '21/08/2020', type: 'Elogio', 
  description: 'Equipamentos muito bem conservados', imagem: 'https://www.boanoticiaes.com.br/wp-content/uploads/2018/06/DSC_1220-1920x1272.jpg'},
];

