import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatTableDataSource, MatDialog, MatDialogConfig, MatSort, MatPaginator } from '@angular/material';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { EditarpersonaComponent } from '../../editarpersona/editarpersona.component';
import { Persona } from 'src/app/models/persona';
import { CrearUsuarioComponent } from 'src/app/components/usuarios/crear-usuario/crear-usuario.component';

@Component({
  selector: 'app-tablapersona',
  templateUrl: './tablapersona.component.html',
  styleUrls: ['./tablapersona.component.css']
})
export class TablapersonaComponent implements OnInit {
  buscar:string;
  constructor(
    private _servicePersona:UsuarioService,
    private dialog:MatDialog,
    private snackbar:MatSnackBar
  ) { }
  listaPersonas:MatTableDataSource<any>
  displayedColumns:string[]=['codigo','nombre','apellido','edad','telefono','direccion','carnet','usuario','email','Opciones']

  @ViewChild(MatSort,{static:false}) sort:MatSort;
  @ViewChild(MatPaginator,{static:false}) paginator:MatPaginator;
  ngOnInit() {
    this.refrescarTabla();
   }
  refrescarTabla()
  {
    this._servicePersona.getUsuario().subscribe(res=>{

      this.listaPersonas=new MatTableDataSource(res.data);
      this.listaPersonas.sort=this.sort;
      this.listaPersonas.paginator=this.paginator;
    },
    error=>{
      console.log(error);
    }
    )
  }
  onEdit(persona:Persona)
  {
    const dialog=new MatDialogConfig();
    dialog.autoFocus=true;
    dialog.height='600px'
    this.dialog.open(EditarpersonaComponent,{data:persona });
  }
  
   onCreate(id:number)
   {
     console.log(id)
    const dialog=new MatDialogConfig();
    dialog.autoFocus=true;
   
    dialog.width='370px';
    this.dialog.open(CrearUsuarioComponent,{data:id});
   } 
   onClear()
   {
     this.buscar="";
     this.filtrar();
   }
   filtrar()
   {
     this.listaPersonas.filter=this.buscar.trim().toLowerCase();
   }


}
