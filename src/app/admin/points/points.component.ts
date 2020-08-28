import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Equipament } from 'src/app/gym/equipament/model/equipament.model';
import { MatPaginator } from '@angular/material/paginator';
import { EquipamentService } from 'src/app/gym/equipament/shared/equipament.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {
  displayedColumns: string[] = ['numero', 'name', 'qty'];
  dataSource : any
  constructor(private equipamentService:EquipamentService) { }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.equipamentService.get().subscribe((os)=>{
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = os;
      this.dataSource.paginator = this.paginator;
     
   })
  }

}
