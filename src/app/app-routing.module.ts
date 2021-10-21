import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './usuarios/listado/listado.component';
import { ListadoSucursalComponent } from './sucursal/listado-sucursal/listado-sucursal.component';
import { ListadoProductoComponent } from './producto/listado-producto/listado-producto.component';




const routes: Routes = [
  { path: 'usuarios', component: ListadoComponent }, 
  { path: 'sucursales', component: ListadoSucursalComponent },  
  { path: 'productos', component: ListadoProductoComponent },  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

