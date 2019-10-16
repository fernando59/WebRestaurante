import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatTableDataSource } from '@angular/material';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-tablapersona',
  templateUrl: './tablapersona.component.html',
  styleUrls: ['./tablapersona.component.css']
})
export class TablapersonaComponent implements OnInit {

  constructor(
    private _servicePersona:PersonaService,
    //mensaje 
    private snackbar:MatSnackBar
  ) { }
  listaPersonas:MatTableDataSource<any>
  displayedColumns:string[]=['id','nombre','apellido','edad','telefono','direccion','ci','tipo','Opciones']

  ngOnInit() {
    this.refrescarTabla();
   }
  refrescarTabla()
  {
    this._servicePersona.getPersona().subscribe(res=>{
      this.listaPersonas=new MatTableDataSource(res.data);
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
      this._servicePersona.deletePersona(id).subscribe(res=>{
        console.log('eliminado');
        this.snackbar.open('Eliminado','Hecho',{
             duration:3000,
             verticalPosition:'top',
             
        })
        this.refrescarTabla();
      })
    }

} 

}
