import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FacturaService } from 'src/app/services/factura/factura.service';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-linegrafico',
  templateUrl: './linegrafico.component.html',
  styleUrls: ['./linegrafico.component.css']
})
export class LinegraficoComponent implements OnInit {
  @ViewChild('canvas', {static: false}) canvas: ElementRef;
  constructor(
    public _serviceFactura:FacturaService
  ) { }
  chart=[]
  datas:any=[]
  a=[1,2,3,4,5,6,8]
  ngOnInit() {
  this.iniciar()
  }
  
  iniciar()
  {
    this._serviceFactura.mostrarTotal().subscribe(res=>{
      this.datas=res.data
      console.log(res.data)
      
      this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
        type: 'line',
      data: {
       labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
       datasets: [{
           label: 'Number of Items Sold in Months',
           data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
           fill:false,
           lineTension:0.2,
           borderColor:"red",
           borderWidth: 1
       }]
      }, 
      options: {
       title:{
           text:"Line Chart",
           display:true
       },
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero:true
               }
           }]
       }
      }
      });
    })
  
  }

}
