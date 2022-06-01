import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SorteoSimpleComponent } from './sorteo-simple/sorteo-simple.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NumeroAleatorioComponent } from './numero-aleatorio/numero-aleatorio.component';
import { RouterModule } from '@angular/router';
import { SorteoAvanzadoComponent } from './sorteo-avanzado/sorteo-avanzado.component';
import { MaterialModule } from '../material/material.module';
import {CalendarModule} from 'primeng/calendar';



@NgModule({
  declarations: [
    SorteoSimpleComponent,
    NumeroAleatorioComponent,
    SorteoAvanzadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    CalendarModule
  ], exports: [
    SorteoSimpleComponent,
    NumeroAleatorioComponent
  ]
})
export class SorteosModule { }
