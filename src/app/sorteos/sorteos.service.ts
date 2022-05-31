import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Sorteo } from './interfaces/sorteo.interface';
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { environment } from '../../environments/environment.prod';
import { initializeApp } from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class SorteosService {

   app = initializeApp(environment.firebaseConfig);
   db = getFirestore(this.app);


  constructor() { }

  getSorteosOfLocal(){

   return JSON.parse(localStorage.getItem('sorteos') || "") ;

  }

  saveSorteoExterno(sorteo: Sorteo, uidUser : string){

    console.log("Llega al servicio");

    let id = UUID.UUID();
    
    sorteo.id = id;

    let userRef = doc(this.db, "Usuarios", uidUser );

    

   
    setDoc(doc(this.db, "sorteos", id), {
        id: id,
      titulo: sorteo.titulo,
      participantes: sorteo.participantes,
      usuario : userRef

    });

    console.log("Llega al final del  servicio");

   

  }
}
