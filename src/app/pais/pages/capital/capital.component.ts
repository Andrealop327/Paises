import { Component } from '@angular/core';
import { PaisService } from '../../services/Pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent {
 
  termino: string = "";
  paises : any[] = [];
  unerror : boolean = false;

  
   constructor (private paisService:PaisService){}
  buscarCapital(event:string) { 
    this.termino = event
    this.paises = [];
    this.unerror = false
    this.paisService.buscarCapital(event)
    .subscribe({
      next:(resp)=>{this.paises = resp},
      error:(err)=>{this.unerror=true}
    }
    )
  }

}
