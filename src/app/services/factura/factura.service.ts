import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
    nit:new FormControl('678914013',Validators.required),
    fecha:new FormControl('',Validators.required),
    serie:new FormControl('00581984',Validators.required),
    total:new FormControl(0,Validators.required),
    id_cajero:new FormControl(1),
    id_pedido:new FormControl(0),
    id_metodo_pago:new FormControl(0)

  })

  insertFactura(factura)
  {
   
    return this.http.post(this.url+'factura/crear.php',factura );
  }
  insertCobro(cobro)
  {
   
    return this.http.post(this.url+'factura/crearCobros.php',cobro);
  }
  obtenerMesa(pedido):Observable<any>
  {
    return this.http.get(this.url+'factura/obtenerMesa.php?s='+pedido);
  }
}
