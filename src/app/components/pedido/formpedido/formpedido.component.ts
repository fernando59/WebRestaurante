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
  public suma:number=0;
  ngOnInit() {
    this._serviceMesa.getMesas().subscribe(res=>{
      this.mesa=res.data;
      this.listamesas=this.mesa.filter(item=>item.estado=='A')
    
    
    })
    this.sumar();
  }
   pedido()
   {
    this._serviceReserva.form.controls['fecha'].setValue(formatDate(new Date(), 'yyyy/MM/dd', 'en'));
    this._serviceReserva.form.controls['hora'].setValue(formatDate(new Date(), 'h:mm:ss a', 'en'));
    this._serviceReserva.form.controls['estado'].setValue('PENDIENTE');
    this._serviceReserva.form.controls['tipo_reserva'].setValue('B');
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
                  this._servicePedido.form.controls['id_reserva'].setValue(parseInt( ultimo.codigo));
                })

                this._servicePedido.insertPedido(this._servicePedido.form.value).subscribe(ped=>{

                  this.snackbar.open('Pedido registrado exitosamente','Aceptar',{
                    duration:5000,
                    verticalPosition:'top'
              
                })
                  this.id_productos.map(res=>{
                              console.log('hola')
                          })
                })
              })
            
       


      })
     
    
     
    }
}
