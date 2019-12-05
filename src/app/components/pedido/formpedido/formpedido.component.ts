import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ReservaService } from 'src/app/services/reserva/reserva.service';
import { formatDate } from '@angular/common';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-formpedido',
  templateUrl: './formpedido.component.html',
  styleUrls: ['./formpedido.component.css']
})
export class FormpedidoComponent implements OnInit,OnChanges {
  mesa:any;
  selected:[];
  sumas:number=0;
  verificar:number=0;
  disable:boolean=false;
   enviar:any;
  constructor(
    public _serviceReserva:ReservaService,
    private _serviceMesa:MesaService,
    public _servicePedido:PedidoService,
    private snackbar:MatSnackBar
  ) { }
  public precio:any[]=[];
  
  @Input() producto:Producto;
  @Input() resta:Producto;

  listamesas:any;
  id_productos=[];
  id_mesas=[]
  public suma:number=0;
  ngOnInit() {
    this._serviceMesa.getMesas().subscribe(res=>{
      this.mesa=res.data;
      this.listamesas=this.mesa.filter(item=>item.estado=='A')
      this.id_mesas.push(this._serviceReserva.form.controls['id_mesas'].value)
    
    })
    this.sumar();
  }
   pedido()
   {
    this._serviceReserva.form.controls['fecha'].setValue(formatDate(new Date(), 'yyyy/MM/dd', 'en'));
    this._serviceReserva.form.controls['hora'].setValue(formatDate(new Date(), 'h:mm:ss a', 'en'));
    this._serviceReserva.form.controls['estado'].setValue('PENDIENTE');
    this._serviceReserva.form.controls['tipo_reserva'].setValue('B');
 
    this._serviceReserva.form.controls['id_mesas'].setValue(1);
    this.id_mesas.push(this._serviceReserva.form.controls['id_mesas'].value)
    console.log(this.id_mesas)
    this._servicePedido.form.controls['fecha'].setValue(formatDate(new Date(), 'yyyy/MM/dd', 'en'));
    console.log(this._serviceReserva.form.value)
    console.log(this._servicePedido.form.value)
   }
  ngOnChanges(changes:SimpleChanges)
  {
   
   // this.precio.push(new Producto(this.producto));
    this.pedido()
    this.sumar();
    }
    sumar()
    {
    
      this.suma+=parseInt(this.producto.precio.toString());
      this.id_productos.push(this.producto.codigo)

      /*this.suma=0;
      for(let i=0; i<this.precio.length; i++)
      {
        
        this.suma+=parseInt( this.precio[i]);
        
      }*/
    }
    change(event,suma)
    {
      if(event.isUserInput) {
        console.log(event.source.value);
        if(event.source.selected)
        {
          this.sumas=this.sumas+parseInt(suma);
          console.log(this.verificar)
          if(this.verificar>=this.sumas){
            this.disable=false;
          }else{
            this.disable=true;
          }
        }
        else
           {
            this.sumas=this.sumas-parseInt(suma);
           }
        
      
  
      }
    }
    onSearchChange(searchValue: string): void {  
      this.verificar=parseInt(searchValue);
      console.log(searchValue);
    }
    onSubmit(form){
      this._serviceReserva.insertReserva(this._serviceReserva.form.value).subscribe(res=>{
       
              this._serviceReserva.obtenerUltimoId().subscribe(codigo=>{
                let ultimo=codigo.data;
                ultimo.map(ultimo=>{
                  let enviar={id_reserva:ultimo.codigo,id_mesa:res};
           this._serviceReserva.detalleReserva(enviar).subscribe(s=>{

           },
           error=>{
             console.log(error)
           });
                  this._servicePedido.form.controls['id_reserva'].setValue(parseInt( ultimo.codigo));
                })

                this._servicePedido.insertPedido(this._servicePedido.form.value).subscribe(ped=>{
                  this.id_productos.map(res=>{
                    this._servicePedido.obtenerUltimoId().subscribe(ultimo=>{
                      
                      let ultimos=ultimo.data
                      ultimos.map(u=>{
                        this.enviar={id_pedido:parseInt(u.codigo),id_producto:parseInt(res),cantidad:1,precio:0};
                        console.log(this.enviar)
                        this._servicePedido.insertDetallePedido(this.enviar).subscribe(res=>{
                                console.log('hola')
                        })
                      })
                      
                    })
                   
                })
                    

                  this.snackbar.open('Pedido registrado exitosamente','Aceptar',{
                    duration:5000,
                    verticalPosition:'top'
              
                })
                
                })
              })
            
       


      })
     
    
     
    }
}
