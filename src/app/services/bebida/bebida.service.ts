import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Global } from '../global';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UnidadMedida } from 'src/app/models/unidadMedida';
import { Producto } from 'src/app/models/producto';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {

    private url:string;
    public bebidaList:Producto;
  constructor(
    private http:HttpClient

  ) {
    this.url=Global.url;
   }

//validaciones y control del formulario

form:FormGroup=new FormGroup({
  codigo:new FormControl(0),
  nombre:new FormControl('',Validators.required),
  descripcion:new FormControl('',[Validators.required,Validators.minLength(4)]),
  precio:new FormControl(0,[Validators.required,Validators.min(1)]),
  imagen:new FormControl(null),
  id_tipo_producto:new FormControl(2),
  unidad_de_medida:new FormControl(''),
  id_unidad_medida:new FormControl(0)

})
form2:FormGroup=new FormGroup({
  codigo:new FormControl(0),
  nombre:new FormControl('',Validators.required),
  descripcion:new FormControl('',[Validators.required,Validators.minLength(4)]),
  precio:new FormControl(0,[Validators.required,Validators.min(1)]),
  imagen:new FormControl(null),
  tipo_producto:new FormControl('A',),
  unidad_de_medida:new FormControl(''),
  id_unidad_medida:new FormControl(0)

})
  getBebida():Observable<any>
  {
   return this.http.get(this.url+'productos/bebidas.php');
  }
  getMedida():Observable<any>
  {
    return this.http.get(this.url+'productos/mostrarMedida.php');
  }
  insertBebida(producto:Producto)
  {
    return this.http.post(this.url+'productos/crear.php',producto);
  }
  updateBebida(producto:Producto)
  {
    return this.http.put(this.url+'productos/editar.php',producto);
  }
  deleteBebida(id)
  {
    return this.http.delete(this.url+'productos/eliminar.php?id='+id);
  }
 
  //----------------------------------------Platos----------------------------------------
  getPlato():Observable<any>
  {
    return this.http.get(this.url+'productos/platos.php');
  }
  getMedida2():Observable<any>
  {
    return this.http.get(this.url+'productos/mostrarMedida2.php');
  }
}
