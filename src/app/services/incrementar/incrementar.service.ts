import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncrementarService {

  constructor() { }
  suma:number[]=[]
  res:number=0
 
  public sumar(numer,precio)
  {
    this.res+=precio
    this.suma.push(numer)
   console.log(this.suma)
    console.log(this.res)
  }
  public restar(numer,precio)
  {

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
