import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisComponent } from './pages/pais/pais.component';
import { CapitalComponent } from './pages/capital/capital.component';
import { RegionComponent } from './pages/region/region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    PaisComponent,
    CapitalComponent,
    RegionComponent,
    VerPaisComponent,
    PaisInputComponent,
    PaisTablaComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    PaisComponent,
    CapitalComponent,
    RegionComponent,
    VerPaisComponent,
 
  ]
})
export class PaisModule { }
