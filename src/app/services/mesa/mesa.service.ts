import { Injectable } from '@angular/core';
import { Global } from '../global'
import { HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';
import {Mesa} from '../../models/mesa'
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class MesaService {
  public url: string;
  public mesaList:Mesa;
  constructor(
    private http: HttpClient
  ) 
  {
    this.url = Global.url;
  }
  form:FormGroup=new FormGroup({
    codigo:new FormControl(0),
    nombre:new FormControl('',Validators.required),
    capacidad:new FormControl(0,[Validators.required,Validators.min(1),Validators.max(10)]),
    estado:new FormControl('A')
     })
   getMesas():Observable<any>
  {
    return this.http.get(this.url+'mesas/mostrar.php');
  }
  deleteMesas(id:Number)
  {
    return this.http.delete(this.url+'mesas/eliminar.php?id='+id);
  }
  
  createMesas(mesa:Mesa)
  {
    return this.http.post(this.url+'mesas/crear.php',mesa);
  }
  updateMesas(mesa:Mesa)
  {
    return this.http.put(this.url+'mesas/editar.php',mesa);
  }
  private _listener=new Subject<any>();
  listen():Observable<any>{
      return this._listener.asObservable();
  }
  filter(filterBy:string)
  {
    this._listener.next(filterBy);
  }
}
