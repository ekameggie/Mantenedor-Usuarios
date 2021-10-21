import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  API_URL  =  environment.API+"usuariosapi/";

  constructor(private httpClient: HttpClient) { 

  }
  getListarSucursal(){
    return this.httpClient.get(this.API_URL+"sucursales/");
  }
  getListarProductos(){
    return this.httpClient.get(this.API_URL+"producto/");
  }
}
