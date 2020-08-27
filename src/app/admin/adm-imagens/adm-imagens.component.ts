import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-adm-imagens',
  templateUrl: './adm-imagens.component.html',
  styleUrls: ['./adm-imagens.component.css']
})
export class AdmImagensComponent implements OnInit {

  registro: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.registro = this.adminService.registros
    console.log(this.registro)
  }



}
