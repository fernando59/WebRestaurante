import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva/reserva.service';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { MatTableDataSource, MatSnackBar, MatDialogConfig, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { DetallereservaComponent } from '../detallereserva/detallereserva.component';
@Component({
  selector: 'app-listareservas',
  templateUrl: './listareservas.component.html',
  styleUrls: ['./listareservas.component.css']
})
export class ListareservasComponent implements OnInit {
  fechas:any;
  fechass:any;
  buscar:string;
  constructor(
    public _serviceReserva:ReservaService,
    private snackbar:MatSnackBar,
    private dialog:MatDialog,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }
  @ViewChild(MatSort,{static:false}) sort:MatSort;
  @ViewChild(MatPaginator,{static:false}) paginator:MatPaginator;

  listaReservas:MatTableDataSource<any>
  reservafiltrada:[];
  displayedColumns:string[]=['codigo','fecha','hora','nombre','estado','numero_personas','Opciones']
  onFilter(form:NgForm)
  {
    const momentDate = new Date(form.value.fecha.toString());
    const formattedDate = moment(momentDate).format("YYYY/MM/DD");
    form.value.fecha=formattedDate;
    this._serviceReserva.filtrarFecha(form.value.fecha).subscribe(res=>{
      this.listaReservas=new MatTableDataSource(res.data);
      this.listaReservas.sort=this.sort;
      this.listaReservas.paginator=this.paginator;
      this.changeDetectorRefs.detectChanges();
 
    },error=>{
      this.snackbar.open('No se encotro resultados','Aceptar',{
        duration:3000,
        verticalPosition:'top'
    })
   
    } )  
  }
  ngOnInit() {
  
  }
  onOpen(codigo)
  {
  
    this._serviceReserva.obtenerUno(codigo).subscribe(res=>{
      this.dialog.open(DetallereservaComponent,{data:res.data,
        width:'900px',height:'560px',disableClose:true}).afterClosed().subscribe(res=>{
        
        });
    })
   
    

  }
  onClear()
  {
    this.buscar="";
    this.filtrar();
  }
  filtrar()
  {
    this.listaReservas.filter=this.buscar.trim().toLowerCase();
  }
 }
