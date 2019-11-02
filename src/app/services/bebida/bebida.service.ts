import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bebida } from 'src/app/models/bebida';
import { Global } from '../global';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {

    private url:string;
    public bebidaList:Bebida;
  constructor(
    private http:HttpClient

  ) {
    this.url=Global.url;
   }

//validaciones y control del formulario

form:FormGroup=new FormGroup({
  nombre:new FormControl('',Validators.required),
  descripcion:new FormControl('',[Validators.required,Validators.minLength(4)]),
  precio:new FormControl(0,[Validators.required,Validators.min(0)]),
  sw_stock:new FormControl(0,[Validators.required,Validators.min(0)]),
  tipo_producto:new FormControl('B',[Validators.required]),
  id_unidad_medida:new FormControl('',[Validators.required])

})

  getBebida():Observable<any>
  {
   return this.http.get(this.url+'productos/bebidas.php');
  }
}
