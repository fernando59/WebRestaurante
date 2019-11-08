import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { Router } from '@angular/router';

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
    private router:Router
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
    this.dialobox.close();
  }
  onOpen()
  {
    this.router.navigate(['./pedidos/crear']);
    this.dialobox.close();
  }
  onSubmit(form)
  {
    
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
