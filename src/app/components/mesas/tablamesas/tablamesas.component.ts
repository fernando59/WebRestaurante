import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import {Mesa} from '../../../models/mesa'
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-tablamesas',
  templateUrl: './tablamesas.component.html',
  styleUrls: ['./tablamesas.component.css']
})
export class TablamesasComponent implements OnInit {

  constructor(
    private _serviceMesa:MesaService,
    //mensaje 
    private snackbar:MatSnackBar
  ) { }
  listaMesas:MatTableDataSource<any>
  displayedColumns:string[]=['id','nombre','estado','capacidad','Opciones']
  ngOnInit() {
    this.refrescarTabla();
  }
  refrescarTabla()
  {
    this._serviceMesa.getMesas().subscribe(res=>{
      this.listaMesas=new MatTableDataSource(res.data);
      console.log(res.data)
    },
    error=>{
      console.log(error);
    }
    )
  }

  onDelete(id:Number)
  {
    if(confirm('Esta seguro  de eliminar'))
    {
      this._serviceMesa.deleteMesas(id).subscribe(res=>{
        console.log('eliminado');
        this.snackbar.open('Eliminado','Hecho',{
             duration:3000,
             verticalPosition:'top',
             
        })
        this.refrescarTabla();
      })
    }

} }
