import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private API_U : UsuarioService) { }
  _Usuario;
  mostrarFormulario=false;
  Usuarios:[];
  ngOnInit(): void {
    this.ListarUsuarios()
  }
  ListarUsuarios(){
    this.API_U.getListarUsuarios().subscribe((data:any)=>{
      console.log(data)
      this.Usuarios=data
    });
   

  }
  MostrarFormularioRegistro(user){
    this.mostrarFormulario=true;
    this._Usuario=user;

  }
  cerrar(){
    this.mostrarFormulario=false;
  }
  Eliminar(row){
    let texto='¿Estás seguro que deseas eliminar al usuario?';
   
    Swal.fire({
      title: 'Eliminar usuario',
      text: texto,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, estoy seguro!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminado!',
          'El usuario fue eliminado',
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
