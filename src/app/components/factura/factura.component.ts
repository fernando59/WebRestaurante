import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ImprimirComponent } from '../imprimir/imprimir.component';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FacturaService } from 'src/app/services/factura/factura.service';
import { formatDate } from '@angular/common';
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
    public _serviceFactura:FacturaService
  ) { }
  mensaje ='fdfdsafdsafa'
  aa=['fdasfds','fdsafdsaf','fdasfsa']
  todos:{};
  //todo:any;
  ngOnInit() {
    this.obtenerTodo(this.rutaActiva.snapshot.params.codigo);
  }
  obtenerTodo(num)
  {
    this._servicePedido.obtenerTodo2(num).subscribe(res=>
      {
        this.todos=res.data
        //this.todos.map(todoa=>
         // this.todo=todoa
         // this._serviceFactura.form.controls['fecha'].setValue(formatDate(new Date(), 'yyyy/MM/dd', 'en'))
          //this._serviceFactura.form.controls['id_pedido'].setValue(todoa.id_pedido)
       // )
       //* console.log(this.todo)
        console.log(this._serviceFactura.form.value)
      })
  }
  insertarFactura()
  {

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
