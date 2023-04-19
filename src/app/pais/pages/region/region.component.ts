import { Component } from '@angular/core';
import { PaisService } from '../../services/Pais.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {

  regiones:string [] = ['africa','europe','america','asia', 'oceania']
  regionActiva:string="";
  paises: any[]= [];
  unerror : boolean = false;

  constructor(private paisServece:PaisService){}

  activarRegion(reg:string){
    this.regionActiva  = reg
    this.paisServece.getPaisRegion(reg).subscribe({
      next:(paises)=>{
        this.paises = paises
        },
      error:(err)=>{this.paises = []}
    })

  }
}
