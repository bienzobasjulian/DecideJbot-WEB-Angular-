import { Injectable } from '@angular/core';
import { Sorteo } from './interfaces/sorteo.interface';

@Injectable({
  providedIn: 'root'
})
export class SorteosService {

  constructor() { }

  getSorteosOfLocal(){

   return JSON.parse(localStorage.getItem('sorteos') || "") ;

  }

  saveSorteoExterno(sorteo: Sorteo){
    
  }
}
