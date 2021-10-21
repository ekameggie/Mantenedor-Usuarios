import { Component, OnInit } from '@angular/core';
import { SucursalService } from 'src/app/services/sucursal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {
  mostrarFormulario=false;
  _Producto;
  productos=[];
  constructor(private API_S: SucursalService) { }

  ngOnInit(): void {
    this.ListarProductos()
  }
  MostrarFormularioRegistro(producto){
    this.mostrarFormulario=true;
    this._Producto=producto;

  }
  ListarProductos(){
    this.API_S.getListarProductos().subscribe((data:any)=>{
      console.log(data)
      this.productos=data
    });
  }
  cerrar(){
    this.mostrarFormulario=false;
  }
  Eliminar(row){
    let texto='¿Estás seguro que deseas eliminar el producto?';
   
    Swal.fire({
      title: 'Eliminar producto',
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
