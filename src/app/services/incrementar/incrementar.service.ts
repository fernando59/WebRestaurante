import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncrementarService {

  constructor() { }
  suma:number[]=[]
  res:number=0
  eliminar:number[]=[]
  agregar:number[]=[]
  public sumar(numer,precio,estado)
  {
    if(estado==false){
      this.agregar.push(numer)
    }
    console.log(this.agregar)
    this.res+=precio
    this.suma.push(numer)
   console.log(this.suma)
    console.log(this.res)
  }
  public restar(numer,precio,estado)
  {
    if(estado==false){
      this.eliminar.push(numer)
    }
    console.log(this.eliminar)
    for(let i=0; i<=this.suma.length; i++)
    {
      if(this.suma[i]==numer){
        this.suma.splice(i,1)
        this.res-=precio
        console.log(this.res)
        console.log(this.suma)
       return
      }
    }
   
    
   
    
  }
}
