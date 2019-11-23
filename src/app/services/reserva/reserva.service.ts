import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Global } from '../global';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  public url:string;
  constructor(private http:HttpClient) { 
    this.url=Global.url;
  }

  form:FormGroup=new FormGroup({
    codigo:new FormControl(0),
    fecha:new FormControl('',Validators.required),
    estado:new FormControl('A'),
    tipo_reserva:new FormControl('A'),
    hora:new FormControl(0),
    numero_personas:new FormControl(0,[Validators.required,Validators.min(1)]),
    observaciones:new FormControl('',Validators.required),
    id_cliente:new FormControl(0),
    nombre_cliente:new FormControl('',Validators.required)

  })
  insertReserva(reserva:any)
  {
    return this.http.post(this.url+'reservas/crear.php',reserva);
  }
}
