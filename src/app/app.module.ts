import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './usuarios/listado/listado.component';
import {  HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './usuarios/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { ListadoSucursalComponent } from './sucursal/listado-sucursal/listado-sucursal.component';
import { RegistroSucursalComponent } from './sucursal/registro-sucursal/registro-sucursal.component';
import { ListadoProductoComponent } from './producto/listado-producto/listado-producto.component';
import { RegistroProductoComponent } from './producto/registro-producto/registro-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    RegistroComponent,
    ListadoSucursalComponent,
    RegistroSucursalComponent,
    ListadoProductoComponent,
    RegistroProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
