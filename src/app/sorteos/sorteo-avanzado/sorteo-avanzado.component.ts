import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { UUID } from 'angular2-uuid';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-sorteo-avanzado',
  templateUrl: './sorteo-avanzado.component.html',
  styleUrls: ['./sorteo-avanzado.component.css'], 
  providers : [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    }
  ]
})
export class SorteoAvanzadoComponent implements OnInit {

  @ViewChild('inputNewParticipante') inputNewParticipante!: ElementRef;
  @ViewChild('inputNumPremios') inputNumPremios!: ElementRef;

  pasoActual : number = 0;
  uid : string = UUID.UUID();
  titulo = "Sorteo avanzado #" + this.uid ;
  participantes: string[] = [];
  numPremios!: number;

  newParticipante: string = '';
  

  constructor(private _formBuilder : FormBuilder ) { }

  ngOnInit(): void {
    
  }

  comenzarSorteoAvanzado(){
    this.pasoActual = 1;
   
  }

  backStep(){
    this.pasoActual--;
  }

  goStepParticipantes(){
    this.pasoActual = 2;
    
    if (this.titulo.length == 0){
      this.titulo = "Sorteo avanzado #" + this.uid ;
    }

    console.log(this.titulo);
  }

  goStepPremios(){
     //Si no hay participantes...
     if (this.participantes.length == 0) {
       let mensajeError = 'Por lo menos debe haber un participante';
       this.showAlert(mensajeError);
     }
     else {
      this.pasoActual = 3;
     }
  }

  goStepFecha(){
    if (this.numPremios == 0 || this.numPremios == null) {
      //Si no se indica el nº de premios, se repartirán tantos premios como participantes haya.
      this.numPremios = this.participantes.length;
    }
    else if(this.numPremios > this.participantes.length){
       //Si hay más premios que participantes...
       let mensajeError = "No puede haber más premios que participantes";
       this.showAlert(mensajeError);
    }
    else{

      this.pasoActual = 4;
    }
  }

  showAlert(mensajeError: string) {
    Swal.fire({
      text: mensajeError,
      icon: 'error',
      showCloseButton: true,
      timer: 3000,
      background: 'red',
      confirmButtonColor: '#4caf50',
      color: 'white',
      iconColor: 'white',
      timerProgressBar: true,
    });
  }




  addParticipante() {
    let valorParticipante = this.newParticipante;

    //Si el participante que se quiere añadir no es un valor vacío y no está incluído en la lista de participantes...
    if (
      valorParticipante.trim().length > 0 &&
      !this.participantes.includes(valorParticipante)
    ) {
      this.participantes.push(valorParticipante);
    }

    this.newParticipante = '';
  }


  eliminarParticipante(i: number) {
    this.participantes.splice(i, 1);

    if (this.participantes.length == 0) {
      
    }
  }


  mezclarParticipantes() {
    this.participantes = this.participantes.sort(() => Math.random() - 0.5);
  }

  removeAllParticipantes() {
    this.participantes = [];
  }
  

}
