import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.component.html',
  styleUrls: ['./imprimir.component.css']
})
export class ImprimirComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }
  imprimir()
  {
    console.log('fdsa')
    const doc=new jsPDF('p', 'pt');
    doc.text('fdsfasfda',15,15);
    doc.save('a4.pdf')
    doc.autoPrint();

  }
  
}
