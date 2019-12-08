import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Global } from '../global';
import { HttpClient } from '@angular/common/http';
import { Reserva } from 'src/app/models/reserva';
import { Observable } from 'rxjs';

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
    estado:new FormControl('PENDIENTE'),
    tipo_reserva:new FormControl('A'),
    hora:new FormControl(0),
    numero_personas:new FormControl(0,[Validators.required,Validators.min(1),Validators.max(10)]),
    observaciones:new FormControl('',Validators.required),
    id_cliente:new FormControl(0),
    nombre_cliente:new FormControl('',Validators.required),
    id_mesero:new FormControl(0),
    id_mesas:new FormControl([0])

  })
  insertReserva(reserva:Reserva)
  {
   
    return this.http.post(this.url+'reservas/crear.php',reserva);
  }
  detalleReserva(detalle:any)
  {
    console.log(detalle)
    return this.http.post(this.url+'reservas/creardetalle.php',detalle);
  }
  obtenerUltimoId():Observable<any>
  {
    return this.http.get(this.url+'reservas/ultimo.php');
  }
  filtrarFecha(fecha):Observable<any>
  {
    return this.http.get(this.url+'reservas/filtrar.php?s='+fecha);
  }
  obtenerUno(codigo):Observable<any>
{
  return this.http.get(this.url+'reservas/uno.php?id='+codigo);
}
  editarEstadoReserva(reserva)
{
 
  return this.http.put(this.url+'reservas/editarestado.php',reserva);
}
}
