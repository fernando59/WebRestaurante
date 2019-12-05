import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ImprimirComponent } from '../imprimir/imprimir.component';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  @ViewChild('imprimir', {static: false}) imprimir:ElementRef
  constructor(
    private dialog:MatDialog
  ) { }
  mensaje ='fdfdsafdsafa'
  aa=['fdasfds','fdsafdsaf','fdasfsa']
  ngOnInit() {
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
