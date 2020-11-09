import { Component, OnInit } from '@angular/core';
import { DadosService } from '../service/dados.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
 
  public dados = this.dadosService.reg();

  constructor(private dadosService:DadosService, ){
  }

  ngOnInit() {
  }

  public Nome='';
  public Email ='';
  public Usuario='';
  public senha='';
  public sexo='';


  public enviarDados(){
    const newObjectRegister ={
    nome: this.Nome,
    email: this.Email,
    user: this.Usuario,
    senha: this.senha,
    sexo: this.sexo
  }
  this.dados.push(newObjectRegister);

  }
}
