import { Component, OnInit } from '@angular/core';
import { SucursalService } from 'src/app/services/sucursal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-sucursal',
  templateUrl: './listado-sucursal.component.html',
  styleUrls: ['./listado-sucursal.component.css']
})
export class ListadoSucursalComponent implements OnInit {
  sucursales:[];
  mostrarFormulario=false;
  _Sucursal;
  constructor(private API_S: SucursalService ) { }

  ngOnInit(): void {
    this.ListarSucursales()
  }
  MostrarFormularioRegistro(sucursal){
    this.mostrarFormulario=true;
    this._Sucursal=sucursal;

  }
  ListarSucursales(){
    this.API_S.getListarSucursal().subscribe((data:any)=>{
      console.log(data)
      this.sucursales=data
    });
  }
  cerrar(){
    this.mostrarFormulario=false;
  }
  Eliminar(row){
    let texto='¿Estás seguro que deseas eliminar la sucursal?';
   
    Swal.fire({
      title: 'Eliminar sucursal',
      text: texto,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, estoy seguro!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminado!',
          'La sucursal fue eliminada',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  
}
