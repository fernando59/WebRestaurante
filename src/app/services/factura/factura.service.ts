import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  public url:string;
  constructor(private http:HttpClient) {
    this.url=Global.url;
   }
   form:FormGroup=new FormGroup({
    codigo:new FormControl(0),
    nit:new FormControl('',Validators.required),
    fecha:new FormControl('',Validators.required),
    serie:new FormControl('',Validators.required),
    total:new FormControl(0,Validators.required),
    id_cajero:new FormControl(0),
    id_pedido:new FormControl(0),
    id_metodo_pago:new FormControl(0)

  })

  insertPedido(factura:FacturaService)
  {
   
    return this.http.post(this.url+'facturas/crear.php',factura );
  }
}
