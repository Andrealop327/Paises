import { RegionComponent } from './pais/pages/region/region.component';
import { CapitalComponent } from './pais/pages/capital/capital.component';
import { PaisComponent } from './pais/pages/pais/pais.component';
import { RouterModule,  Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
{path:'', component:PaisComponent},
{path:'capital', component:CapitalComponent},
{path:'region', component:RegionComponent},
{path:'detalle/:id' , component:VerPaisComponent},
{path:'**', redirectTo:''},
];

@NgModule({
  //imports:[CommonModule],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
  declarations: [],
     
})

export class AppRoutingModule { }
