import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosService } from 'src/app/service/dados.service';
import{Storage} from '@ionic/storage'



@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {



  public dados = this.dadosService.all();
  constructor(private storage:Storage,private dadosService:DadosService){
    this.loadData();
  }

  ngOnInit() {
  }
  

public newNome='';
 public newData ='';
 public newService='';
 public newHora='';
 public newObs='';

  public save(){
    const newObjectAgenda ={
      id:1,
      nome:'fernando',
      data: this.newData,
      service:this.newService,
      hora: this.newHora,
      obs: this.newObs
  }
  this.dados.push(newObjectAgenda);
  this.saveData();
  this.newData='';
  this.newService='';
  this.newHora='';
  this.newObs='';
  }

 
  

//para ele carregar o banco
private async loadData(){
  const loaded = await this.storage.get('data')|| [];
  this.dados.push(...loaded);
}
//salvar as mudanças feitas e colocar dentro do banco
private saveData(){
   this.storage.set('data',this.dados)|| [];
 
}

 
}
