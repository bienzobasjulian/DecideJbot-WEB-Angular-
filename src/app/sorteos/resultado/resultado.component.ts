import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';;
import { Resultado } from '../interfaces/resultado.interface';
import { Sorteo } from '../interfaces/sorteo.interface';
import { SorteosService } from '../sorteos.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  resultado !: Resultado;
 

  constructor(private activatedRoute : ActivatedRoute,
    private sorteosService : SorteosService,
    private router: Router) { }

  ngOnInit(): void {

    let resultadoObtenido;

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id){
      //Obtener el resultado
     this.sorteosService.getResultadoPorId(id).then(response => {
      //  console.log(response);

      if(!response){
        //Si no hay resultado, salimos de la página
        this.router.navigate(['/']);
      }
      else {

        // Si hay resultado...

        let resultado : Resultado = {

          id: response!.id,
          ganadores : response!.ganadores,
          sorteo : response!.sorteo, 
       }

       //Obtener el sorteo
       this.sorteosService.getSorteoOfReference(resultado.sorteo).then(response => {
        if(response){

         if (response.fechaProgramada){
          
         }

          let sorteo : Sorteo = {
            titulo : response.titulo,
            participantes : response.participantes,
            fechaProgramada : response.fechaProgramada,
            numPremios :response.numPremios
          }

          resultado.sorteo = sorteo;
          this.resultado = resultado;

          let fechaActual = new Date().valueOf();

          if (sorteo.fechaProgramada){
               

              let timeFechaProgramada = sorteo.fechaProgramada['seconds'];
              
              let miFechaActual = new Date();

              let fechaProgramada = new Date(timeFechaProgramada*1000);

              if (miFechaActual >= fechaProgramada){
                //alert("Dame los resultados");
              }
              else{
                //alert("Aun no");
              }

             
              

              
              

             
             
          }

         

      
  
        }
       })

       
      }

      
     })
      
    }

    else {
      this.router.navigate(['/']);
    }
    
    
    
    
  }

  toTimeStamp(fechaActual : string){
    var datum : number = Date.parse(fechaActual);
    return datum / 1000;
  }


}
