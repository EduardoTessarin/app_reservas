import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import{Storage} from '@ionic/storage'

export interface Dados{
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


  private dados: Dados[]=[
    {id: 1,nome:'Fernando',data:'10/10/10',service:'Corte',hora:'10:30',obs:'Corte longo'}

  ];



public all(){
  return this.dados;
}
















 
}
