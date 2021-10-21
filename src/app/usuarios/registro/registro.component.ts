import { Component, OnInit , Input, Output, EventEmitter,} from '@angular/core';
import { SucursalService } from 'src/app/services/sucursal.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  @Input() user:string;
  @Output() cerrar = new EventEmitter();
 
  constructor(private API_S:SucursalService) { }
  sucursal;
  _user;
  usuario={
    id:0,
    nombres:'',
    user:'',
    pass:'',
    sucursal:undefined
  }
  ngOnInit(): void {
    this.ListarSucursal();
    if(this.user!=null){
      this._user=this.user
      this.usuario.nombres=this._user.Nombre;
      this.usuario.pass=this._user.Password;
      this.usuario.user=this._user.Usuario;
      this.usuario.sucursal=this._user.Sucursal;
    }
  }
  cerrarVentana(){
    this.cerrar.emit("1");
  }
  ListarSucursal(){
    this.API_S.getListarSucursal().subscribe((data:any)=>{
      this.sucursal=data;
    })
  }
  Registrar(tipo){
    let texto='';
    let texto2='';

    if(tipo==0){
      texto='¿Está seguro que deseas registrar el nuevo usuario?'
      texto2='Registro del usuario';

    }
    else{
      texto='¿Está seguro que deseas modificar los datos  del usuario?'
      texto2='Modificar datos del usuario';

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
          'El usuario fue registrado',
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
