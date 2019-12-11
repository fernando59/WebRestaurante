import { Injectable } from '@angular/core';
import { Global } from '../global';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  public url:string;

    personalist:Persona;
    constructor(private http:HttpClient)
    {
      this.url=Global.url;
    }
    form:FormGroup=new FormGroup({
      codigo:new FormControl(0),
      nombre:new FormControl('',Validators.required),
      apellido:new FormControl('',Validators.required),
      edad:new FormControl(0,[Validators.required,Validators.min(1)]),
      direccion:new FormControl('',Validators.required),
      telefono:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]),
      carnet:new FormControl('',Validators.required),
      foto:new FormControl(''),
      nit:new FormControl(''),
      descripcion:new FormControl('')
    })
  getPersona():Observable<any>
  {
      return this.http.get(this.url+'usuarios/mostrar.php');
       
      
  }
  insertPersona(persona:Persona)
  {
    return this.http.post(this.url+'personas/crear.php',persona);
  }
  updatePesona(persona:Persona)
  {
    return this.http.put(this.url+'personas/editar.php',persona);
  }

  deletePersona(id:Number)
  {
    return this.http.delete(this.url+'personas/eliminar.php?id='+id);
  }

  dropdownMesero():Observable<any>
  {
    return this.http.get(this.url+'personas/meseros.php');
  }
  getCliente():Observable<any>
  {
    return this.http.get(this.url+'personas/cliente.php');
  }
  obtenerUltimoId():Observable<any>
  {
    return this.http.get(this.url+'personas/ultimoId.php');
  }
  insertCliente(cliente)
  {
  
    return this.http.post(this.url+'personas/crearCliente.php',cliente);
  }
  insertMesero(cliente)
  {
  
    return this.http.post(this.url+'personas/crearMesero.php',cliente);
  }
  insertCaja(cliente)
  {
  
    return this.http.post(this.url+'personas/crearCaja.php',cliente);
  }

}
