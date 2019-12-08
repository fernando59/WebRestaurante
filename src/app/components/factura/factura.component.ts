import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { MatDialogConfig, MatDialog, MatSnackBar } from '@angular/material';
import { ImprimirComponent } from '../imprimir/imprimir.component';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FacturaService } from 'src/app/services/factura/factura.service';
import { formatDate } from '@angular/common';
import { NgForm } from '@angular/forms';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { ReservaService } from 'src/app/services/reserva/reserva.service';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  @ViewChild('imprimir', {static: false}) imprimir:ElementRef
  constructor(
    private dialog:MatDialog,
    public _servicePedido: PedidoService,
    private rutaActiva: ActivatedRoute,
    public _serviceFactura:FacturaService,
    public _serviceMesa:MesaService,
    public _serviceReserva:ReservaService,
    private snackbar: MatSnackBar,
    private router:Router,
  ) { }
  mensaje ='fdfdsafdsafa'
  aa=['fdasfds','fdsafdsaf','fdasfsa']
  todos:any=[];
  todo:any=[];
  productos:any=[]
  suma:number=0;
  //todo:any;
  ngOnInit() {
    this.obtenerTodo(this.rutaActiva.snapshot.params.codigo);
  }
  obtenerTodo(num)
  {
    this._servicePedido.obtenerTodo2(num).subscribe(res=>
      {
        this.todos=res.data
        console.log(this.todos)
        this.todos.map(t=>this.todo=t)
        this._servicePedido.obtenerProducto(parseInt( this.todo.codigo_pedido)).subscribe(pro=>{
          console.log(pro.data)
          this.productos=pro.data
        this.productos.map(suma=>{
          this.suma=this.suma+(suma.cantidad*suma.precio)
         
        })
        })
       
        //this.todos.map(todoa=>
         // this.todo=todoa
          this._serviceFactura.form.controls['fecha'].setValue(formatDate(new Date(), 'yyyy/MM/dd', 'en'))
          this._serviceFactura.form.controls['id_pedido'].setValue(parseInt( this.todo.codigo_pedido))
          
       // )
       //* console.log(this.todo)
       console.log(this.todo)
        console.log(this._serviceFactura.form.value)
      })
  }
  onSubmit(form:NgForm)
  {
    this._serviceFactura.form.controls['id_metodo_pago'].setValue(form.value.metodo_pago)
    this._serviceFactura.form.controls['total'].setValue(this.suma)
    this._serviceFactura.obtenerMesa(this.todo.codigo_reserva).subscribe(res=>{
      let enviar=res.data
      console.log(enviar)
      this._serviceFactura.insertFactura(this._serviceFactura.form.value).subscribe(fac=>{
        enviar.map(codigo=>{
          let a={codigo:codigo.codigo}
          this._serviceMesa.updateMesass(a).subscribe(mes=>{
            let reservaE={codigo:this.todo.codigo_reserva,estado:'FINALIZADO'}
            this._serviceReserva.editarEstadoReserva(reservaE).subscribe(est=>
              {
                let cobro={id_pedido:this._serviceFactura.form.controls['id_pedido'].value,id_cajero:1,id_cliente:this.todo.id_persona}
                this._serviceFactura.insertCobro(cobro).subscribe(res=>{
                  this.snackbar.open('Cobro realizado correctamente', 'Aceptar', {
                    duration: 5000,
                    verticalPosition: 'top'
        
                  })
                })
            
              })
          
            this.router.navigateByUrl('pedidos/pedido');
          })
          console.log(codigo.codigo)
        })
      })
    
    })
    console.log(form.value)
    console.log(this._serviceFactura.form.value)
  }
  Imprimir(e)
  {
   
    if(e.checked)
    {
      let doc=new jsPDF('p', 'mm', [297, 210]);
      let  specialElementHandler={
        '#imprimir':function(element,render)
        {
          return true;
        }
      }
      
      let content=this.imprimir.nativeElement;
      doc.fromHTML(content.innerHTML,15,15,
        {
          'width':50,
          'elementHandlers':specialElementHandler
        })
        doc.save('test.pdf')
     
     /* const doc=new jsPDF('p', 'pt');
    doc.text('este es ni '+this.mensaje,15,15);
    doc.save('a4.pdf')
    doc.autoPrint();
      /*const dialog=new MatDialogConfig();
      dialog.autoFocus=true;
      
      this.dialog.open(ImprimirComponent).afterClosed().subscribe(res=>{
        
      });*/
    }

  }
}
