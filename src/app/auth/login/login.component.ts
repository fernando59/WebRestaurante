import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router,
    public _serviceUsuario:UsuarioService
  ) { }

  ngOnInit() {
  }
    login(usuario:NgForm)
    {
      this.router.navigateByUrl('inicio/pedidos');
      /*console.log(usuario.value)
      this._serviceUsuario.login(usuario.value).subscribe(res=>{
        this.router.navigateByUrl('inicio/pedidos');
      },error=>{
        console.log('Error login')
      })
     */
    }
}
