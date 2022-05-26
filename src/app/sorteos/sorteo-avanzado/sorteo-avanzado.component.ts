import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Participante {
  name: string;
}

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
  
  participantesFormGroup : FormGroup =  this._formBuilder.group({
    titulo: ['Sorteo Avanzado', [Validators.required]],
    participantes: this._formBuilder.array([], Validators.required)
  });

  premiosFormGroup : FormGroup = this._formBuilder.group({
    numeroPremios : [0, [Validators.required]],
    premios: this._formBuilder.array([], Validators.required)
  });

  propiedadesFormGroup : FormGroup = this._formBuilder.group({
    fechaProgramada :  [, [Validators.required]]
    
  });

  get participantesArr(){
    return this.participantesFormGroup.get('participantes') as FormArray;
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  objetosParticipantes : Participante[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.objetosParticipantes.push({name: value});
      
      
      
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(participante: Participante): void {
    const index = this.objetosParticipantes.indexOf(participante);

    if (index >= 0) {
      this.objetosParticipantes.splice(index, 1);
    }
  }

  




  


  constructor(private _formBuilder : FormBuilder ) { }

  ngOnInit(): void {
    
   
  }
  

}
