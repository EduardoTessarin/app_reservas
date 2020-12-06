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

export interface register{
  nome: string;
  email:string;
  user:string;
  senha:string;
  sexo:string;
}


@Injectable({
  providedIn: 'root'
})

export class DadosService {


  public dados: Dados[]=[];

  private register: register[]=[
    {nome:'',email:'teste01@gmail.com',user:'teste',senha:'1000',sexo:'Masculino'}
  ];
//
public reg(){
  return this.register;
}
//
public all(){
  return this.dados;
}
















 
}