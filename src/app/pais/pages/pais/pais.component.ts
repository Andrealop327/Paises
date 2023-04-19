
import { Component } from '@angular/core';
import { PaisService } from '../../services/Pais.service';



@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent {
  constructor (private paisService:PaisService){}

  termino : string  = ""
  paises  : any  [] = [];
  unerror : boolean = false;

  buscarPais(event:string) { 
    this.termino = event
    this.unerror = false
    this.paisService.buscarPais(event)
    .subscribe({
      next:(resp)=>{this.paises = resp},
      error:(err)=>{this.unerror=true}
    }
    )
  }
}

