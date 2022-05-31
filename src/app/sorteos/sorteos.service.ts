import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Sorteo } from './interfaces/sorteo.interface';
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import { environment } from '../../environments/environment.prod';
import { initializeApp } from 'firebase/app';




@Injectable({
  providedIn: 'root'
})
export class SorteosService {



   app = initializeApp(environment.firebaseConfig);
   db = getFirestore(this.app);
    sorteosExternos : Sorteo[] = [];


  constructor() { }

  getSorteosOfLocal(){

   return JSON.parse(localStorage.getItem('sorteos') || "") ;

  }

  saveSorteoExterno(sorteo: Sorteo, uidUser : string){

    

    let id = UUID.UUID();
    
    sorteo.id = id;

    let userRef = doc(this.db, "Usuarios", uidUser );

    

   
    setDoc(doc(this.db, "sorteos", id), {
        id: id,
      titulo: sorteo.titulo,
      participantes: sorteo.participantes,
      usuario : userRef

    });

    

   

  }

  async getSorteosExternos(uidUser : string)  {


    let userRef = doc(this.db, "Usuarios", uidUser );
    //const query = query(collection(this.db, "sorteos"), where ("usuario", "==", userRef));

    const q = query(collection(this.db, "sorteos"), where ("usuario", "==", userRef));

    const resultado = await getDocs(q);

   

    let sorteosExternos : Sorteo[] = [];

  

    resultado.forEach((doc) => {
     
     let sorteo : Sorteo = {
       titulo : doc.data()['titulo'],
       participantes : doc.data()['participantes'],
     }

     this.sorteosExternos.push(sorteo);

    
     
    });

    return this.sorteosExternos;

  }
}
