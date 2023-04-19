import { PaisService } from './../../services/Pais.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent  implements OnInit {
  pais!:any
 
  constructor( private activedRoute:ActivatedRoute, private paisService:PaisService ){} 
  ngOnInit(): void{
    this.activedRoute.params.subscribe(({id}) =>{
      this.paisService.detallePorCodePais(id).subscribe({
        next:(pais)=>{
          this.pais = pais[0]
        },
        error:(e)=>{
          console.log("hay un error")
        }
      }
         
      )
    })
 
  }
}
