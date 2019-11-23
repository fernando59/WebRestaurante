import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';
import { Umedida } from 'src/app/models/uMedida';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UMedidaService {
  private url;
  constructor(
    private http:HttpClient,
    
  ) {
    this.url=Global.url;
   }
   //----------------------------formulario

   form:FormGroup= new FormGroup({
     codigo:new FormControl(0),
     nombre:new FormControl('',Validators.required),
     tipo:new FormControl('A',Validators.required)
   })



  getUmedida():Observable<any>{
    return this.http.get(this.url+"u_medida/mostrar.php");
  }
  insertUmedida(uMedida:Umedida ){
    return this.http.post(this.url+"u_medida/crear.php",uMedida);

  }
  updateUmedida(uMedida:Umedida)
  {
    return this.http.put(this.url+'u_medida/editar.php',uMedida);
  }
  deleteUmedida(codigo)
  {
    return this.http.delete(this.url+'u_medida/eliminar.php?id='+codigo);
  }
}
