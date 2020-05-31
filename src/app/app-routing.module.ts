import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PartidasComponent } from './components/partidas/partidas.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { EventosComponent } from './components/eventos/eventos.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'partidas', component: PartidasComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'ingresar', component: IngresarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
