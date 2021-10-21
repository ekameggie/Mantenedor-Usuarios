import { Component, OnInit , Input, Output, EventEmitter,} from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-sucursal',
  templateUrl: './registro-sucursal.component.html',
  styleUrls: ['./registro-sucursal.component.css']
})
export class RegistroSucursalComponent implements OnInit {
  @Input() sucursal:string;
  @Output() cerrar = new EventEmitter();
  suc;
  _sucursal={
    Cod_Sucursal:0,
    nombres:'',
  }
  constructor() { }

  ngOnInit(): void {
    if(this.sucursal!=null){
      this.suc=this.sucursal
      this._sucursal.nombres=this.suc.sucursal;
      this._sucursal.Cod_Sucursal=this.suc.Cod_Sucursal;
    }
  }
  cerrarVentana(){
    this.cerrar.emit("1");
  }
  Registrar(tipo){
    let texto2='';
    let texto='';
    if(tipo==0){
      texto='¿Está seguro que deseas registrar una nueva sucursal?'
      texto2='Registro de la sucursal';

    }
    else{
      texto='¿Está seguro que deseas modificar los datos  de la sucursal?'
      texto2='Modificar datos de la sucursal';

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
          'La sucursal fue registrada',
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
