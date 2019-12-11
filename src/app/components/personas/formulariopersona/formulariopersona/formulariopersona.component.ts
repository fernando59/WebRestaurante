import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-formulariopersona',
  templateUrl: './formulariopersona.component.html',
  styleUrls: ['./formulariopersona.component.css']
})
export class FormulariopersonaComponent implements OnInit {

  constructor(
    public dialobox:MatDialogRef<FormulariopersonaComponent>,
    private _personaService:PersonaService,
    private snackbar:MatSnackBar,
    @Inject (MAT_DIALOG_DATA) public data:any,
  ) { }
    titulo:string='Nuevo Cliente'
  ngOnInit() {
    if(this.data==1)
    {
      this.titulo='Nuevo Cliente'
    }else if(this.data==2)
    {
      this.titulo='Nuevo Mesero'
    }else
    {
      this.titulo='Nuevo Cajero'
    }
    console.log(this.data)
  }
  onClose()
  {
    this.dialobox.close();
  //  this._personaService.filter('Register succesfull');
  }
  onSubmit(form:NgForm)
  {
  
    this._personaService.insertPersona(form.value).subscribe(res=>
      
      {
        if(this.data==1){
          this._personaService.obtenerUltimoId().subscribe(codigo=>{
            let ultimo=codigo.data
          ultimo.map(c=>{
            let enviar={codigo:parseInt( c.codigo),nit:form.value.nit}
            this._personaService.insertCliente(enviar).subscribe(r=>{
              console.log(r)
              this.snackbar.open('Agregado correctamente','',{
                duration:3000,
                verticalPosition:'top'
              })
            })
          })
        
      
            
        })
        }else if(this.data==2)
        {
          this._personaService.obtenerUltimoId().subscribe(codigo=>{
            let ultimo=codigo.data
          ultimo.map(c=>{
            let enviar={codigo:parseInt( c.codigo),foto:form.value.foto}
            this._personaService.insertMesero(enviar).subscribe(r=>{
              console.log(r)
              this.snackbar.open('Agregado correctamente','',{
                duration:3000,
                verticalPosition:'top'
              })
            })
          })
        
      
            
        })
        }else{
          this._personaService.obtenerUltimoId().subscribe(codigo=>{
            let ultimo=codigo.data
          ultimo.map(c=>{
            let enviar={codigo:parseInt( c.codigo),descripcion:form.value.descripcion}
            this._personaService.insertCaja(enviar).subscribe(r=>{
              console.log(r)
              this.snackbar.open('Agregado correctamente','',{
                duration:3000,
                verticalPosition:'top'
              })
            })
          })
        
      
            
        })
        }
   
         

   
      
      },
      error=>{
        console.log(error)
      }
      
      
      )
      this.dialobox.close();
  }

}
