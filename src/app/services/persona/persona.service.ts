import { Injectable } from '@angular/core';
import { Global } from '../global';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { HttpClient } from '@angular/common/http';

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
}
