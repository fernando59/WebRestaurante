import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { Router } from '@angular/router';
import { ModalClienteComponent } from '../../personas/modal-cliente/modal-cliente.component';
import { ReservaService } from 'src/app/services/reserva/reserva.service';
import { PedidoService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'app-modalmesa',
  templateUrl: './modalmesa.component.html',
  styleUrls: ['./modalmesa.component.css']
})
export class ModalmesaComponent implements OnInit {

  constructor(
    public dialobox:MatDialogRef<ModalmesaComponent>,
    public _serviceMesa:MesaService,
    @Inject (MAT_DIALOG_DATA) public data:any,
    private _servicePersona:PersonaService,
    private router:Router,
    private dialog:MatDialog,
    private snackbar:MatSnackBar,
    public _serviceReserva:ReservaService,
   public _servicePedido:PedidoService
  ) { }

    //dropdown
    public meserosItems:any;

  ngOnInit() {
    this._serviceMesa.mesaList=this.data;
    console.log(this._serviceMesa.mesaList)
    this.drowdownRefresh();
  }
  onClose()
  {
    let enviar=false;
    this.dialobox.close(enviar);
  }
  onOpen()
  {
  
    this.router.navigateByUrl('pedidos/crear');
    this.dialobox.close();
  }
  onOpenn()
  {
    const dialog=new MatDialogConfig();
    dialog.autoFocus=true;
    dialog.height='560px';
    dialog.width='900px';
    dialog.disableClose=true;
    this.dialog.open(ModalClienteComponent,dialog).afterClosed().subscribe(res=>{
      this._serviceReserva.form.controls['nombre_cliente'].setValue(res.nombre);
      this._serviceReserva.form.controls['id_cliente'].setValue(parseInt(res.codigo));

      console.log(res.nombre)
    });
    return false;
  }
  onSubmit(form)
  {
    let salir=true;
    console.log(this._serviceMesa.mesaList.codigo)
    this._serviceReserva.form.controls['observaciones'].setValue(form.value.observaciones);
    this._servicePedido.form.controls['id_mesero'].setValue(parseInt( form.value.id_mesero));
    this._serviceReserva.form.controls['id_mesas'].setValue(parseInt( this._serviceMesa.mesaList.codigo.toString()));
    console.log(this._serviceReserva.form.value)
    this.dialobox.close(salir);
  }
  drowdownRefresh()
  {
    this._servicePersona.dropdownMesero().subscribe(res=>{
        this.meserosItems=res.data;
      
    },error=>{
      console.log(error)
    })
  }
}
