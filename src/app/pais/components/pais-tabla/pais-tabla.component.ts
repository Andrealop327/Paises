import { CapitalComponent } from './../../pages/capital/capital.component';
import { Component, Input, Output } from '@angular/core';


@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
  
})
export class PaisTablaComponent {

  @Input() paises:any[]=[];
 
}

