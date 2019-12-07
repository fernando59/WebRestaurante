import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pedido } from 'src/app/models/pedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  public url:string;
  constructor(private http:HttpClient) {
    this.url=Global.url;
   }
   form:FormGroup=new FormGroup({
    codigo:new FormControl(0),
    fecha:new FormControl('',Validators.required),
    estado:new FormControl('A'),
    id_mesero:new FormControl(0),
    id_reserva:new FormControl(0)
  

  })

  insertPedido(pedido:Pedido)
  {
   
    return this.http.post(this.url+'pedidos/crear.php',pedido);
  }
  insertDetallePedido(detalle)
  {
    return this.http.post(this.url+'productos/crearDetalle.php',detalle)
  }
  obtenerUltimoId():Observable<any>
  {
    return this.http.get(this.url+'pedidos/ultimo.php');
  }
  obtenerTodo():Observable<any>
  {
    return this.http.get(this.url+'pedidos/mostrarTodo.php');
  }
  obtenerTodo2(mesa):Observable<any>
  {
    return this.http.get(this.url+'pedidos/mostrarTodo2.php?s='+mesa);
  }
}
