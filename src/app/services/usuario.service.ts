import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API_URL  =  environment.API+"usuariosapi/";

  constructor(private httpClient: HttpClient) { }
  getListarUsuarios(){
    return this.httpClient.get(this.API_URL+"Usuario/");
  }
 
}
