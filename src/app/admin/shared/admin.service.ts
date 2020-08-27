import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  registros: any;

  constructor() { }

  get(){
    return this.registros;
  }

}
