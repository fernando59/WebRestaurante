import { Component, OnInit, OnDestroy } from '@angular/core';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { ReservaService } from 'src/app/services/reserva/reserva.service';
import { MatDialogConfig, MatDialog, DateAdapter, MAT_DATE_FORMATS, MatSnackBar } from '@angular/material';
import { ModalClienteComponent } from '../../personas/modal-cliente/modal-cliente.component';
import { AppDateAdapter, APP_DATE_FORMATS } from './picker';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona/persona.service';
@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css'],
  providers:[
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class CrearReservaComponent implements OnInit,OnDestroy {
mesa:any;
selected:[];
valor:number=0;
suma:number=0;
verificar:number=0;
disable:boolean=false;
  constructor(
    private _serviceMesa:MesaService,
    public _serviceReserva:ReservaService,
    private dialog:MatDialog,
    private snackbar:MatSnackBar,
    private router: Router,
    private _servicePersona:PersonaService
    
  ) { }
  listamesas:any;
  listaclientes:any
  ngOnInit() {
    this.clientes()
    this._serviceMesa.getMesas().subscribe(res=>{
      this.mesa=res.data;
      this.listamesas=this.mesa;//.filter(item=>item.estado=='A')
      console.log(this.listamesas)
    })
  }
  ngOnDestroy()
  {
    this._serviceReserva.form.reset();
  }
  clientes()
  {
    this._servicePersona.getCliente().subscribe(res=>{
      this.listaclientes=res.data
    })
  }
  onOpen()
  {
    const dialog=new MatDialogConfig();
    dialog.autoFocus=true;
    dialog.height='560px';
    dialog.width='900px';
    dialog.disableClose=true;
    this.dialog.open(ModalClienteComponent,dialog).afterClosed().subscribe(res=>{
      this._serviceReserva.form.controls['nombre_cliente'].setValue(res.nombre);
      this._serviceReserva.form.controls['estado'].setValue('PENDIENTE');
      this._serviceReserva.form.controls['tipo_reserva'].setValue('B');
      this._serviceReserva.form.controls['id_cliente'].setValue(parseInt(res.codigo));
      console.log(res.nombre)
    });
    return false;
  }
  onSubmit(form:NgForm){

    console.log(form.value)
    const momentDate = new Date(form.value.fecha.toString()); // Replace event.value with your date value
    const formattedDate = moment(momentDate).format("YYYY/MM/DD");
    form.value.fecha=formattedDate;
   // form.value.estado=
    console.log(form.value.fecha);
    console.log(form.value)

    this._serviceReserva.insertReserva(form.value).subscribe(res=>{
      this.selected.map(ress=>{
      this._serviceReserva.obtenerUltimoId().subscribe(resss=>{
        let ultimo=resss.data;
           ultimo.map(ultimo=>{
       
         let enviar={id_reserva:ultimo.codigo,id_mesa:ress};
           this._serviceReserva.detalleReserva(enviar).subscribe(s=>{

           },
           error=>{
             console.log(error)
           });
      })
        })

        this.snackbar.open('Creado exitosamente','Hecho',{
          duration:3000,
          verticalPosition:'top'
    
      })
      },error=>{
        console.log(error)
      })
    })
    this.router.navigateByUrl('inicio/reservas/tabla');
  }
  change(event,suma)
  {
    if(event.isUserInput) {
      console.log(event.source.value);
      this.valor=event.source.value;
      if(event.source.selected)
      {
        this.suma=this.suma+parseInt(suma);
        console.log(this.verificar)
        if(this.verificar>=this.suma){
          this.disable=false;
        }else{
          this.disable=true;
        }
      }
      else
         {
          this.suma=this.suma-parseInt(suma);
         }
      
    

    }
  }
  onSearchChange(searchValue: string): void {  
    this.verificar=parseInt(searchValue);
    console.log(searchValue);
  }


}
