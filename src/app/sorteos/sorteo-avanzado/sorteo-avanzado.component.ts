import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { UUID } from 'angular2-uuid';



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

  pasoActual : number = 0;
  uid : string = UUID.UUID();
  titulo = "Sorteo avanzado #" + this.uid ;
  

  constructor(private _formBuilder : FormBuilder ) { }

  ngOnInit(): void {
    
  }

  comenzarSorteoAvanzado(){
    this.pasoActual = 1;
   
  }

  goStepParticipantes(){
    this.pasoActual = 2;
    
    if (this.titulo.length == 0){
      this.titulo = "Sorteo avanzado #" + this.uid ;
    }

    console.log(this.titulo);
  }
  

}
