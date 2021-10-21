import { Component, OnInit , Input, Output, EventEmitter,} from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css']
})
export class RegistroProductoComponent implements OnInit {
  @Input() producto:string;
  @Output() cerrar = new EventEmitter();
  constructor() { }
  prod;
  _producto={
    cod_producto:0,
    nombre:'',
    precio:0,
  }

  ngOnInit(): void {
    if(this.producto!=null){
      this.prod=this.producto
      this._producto.nombre=this.prod.producto;
      this._producto.precio=this.prod.precio;
    }
  }
  cerrarVentana(){
    this.cerrar.emit("1");
  }
  Registrar(tipo){
    let texto='';
    let texto2='';

    if(tipo==0){

      texto='¿Está seguro que deseas registrar un nuevo producto?'
      texto2='Registro del producto';
    }
    else{
      texto='¿Está seguro que deseas modificar los datos  del producto?'
      texto2='Modificar datos del producto';

    }
    Swal.fire({
      title: texto2,
      text: texto,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, estoy seguro!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Registrado!',
          'El producto fue registrada',
          'success'
        ).then((result)=>{
          this.cerrarVentana()
        })
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
