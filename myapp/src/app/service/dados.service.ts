import { Injectable } from '@angular/core';


export interface dados{
  id:number;
  nome:string;
  data: string;
  service: string;
  hora: string;
  obs: string;
}

@Injectable({
  providedIn: 'root'
})
export class DadosService {


  private dados: dados[]=[
    {id: 1 ,nome:'Fernando',data:'10/1/2020',service:'Cortar Cabelo',hora:'10:30',obs:'Teste'}
  ]

 public all(){
   return this.dados;
 }
}
