import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';
import {map,filter,mergeMap} from 'rxjs/operators';
import { Unusuario } from 'src/app/models/unUsuario';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public usuarioList:Unusuario
  public url:string;
  constructor(private http:HttpClient) {
    this.url=Global.url;
   }
      //validaciones y control del formulario

      form:FormGroup=new FormGroup({
        codigo:new FormControl(null),
        nombre_usuario:new FormControl('',Validators.required),
        password_usuario:new FormControl('',[Validators.required,Validators.minLength(4)]),
        email:new FormControl('',[Validators.email,Validators.required],[
          
        ]),
        codigo_usuario:new FormControl('1'),
        estado:new FormControl('A')

      })
      
  getUsuario():Observable<any>
  {
      return this.http.get(this.url+'usuarios/mostrar.php');
       
      
  }
  insertUsuario(usuario:Unusuario)
  {
    console.log(usuario.codigo)
    return this.http.post(this.url+'usuarios/crear.php',usuario);
  }
  buscar(palabra):Observable<any>
  {
    return this.http.get(this.url+'usuarios/buscar.php?s='+palabra)
  }
  getCliente():Observable<any>
  {
    return this.http.get(this.url+'personas/cliente.php');
  }
  getCaja():Observable<any>
  {
    return this.http.get(this.url+'personas/caja.php');
  }
  getMesero():Observable<any>
  {
    return this.http.get(this.url+'personas/mesero.php');
  }
  login(usuario)
  {
    return this.http.post(this.url+'usuario/verificar.php',usuario);
  }
validarEmail(control:AbstractControl)
{
  let email={
    user:control.value
  }
  return this.http.get(this.url+'usuarios/mostrar.php').subscribe((data:any)=>{
    console.log(data.length);
  })
}
}
