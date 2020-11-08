import { Component, OnInit } from '@angular/core';
import { DadosService } from 'src/app/service/dados.service';




@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {


 
  public dados = this.Dadosservice.all();

  constructor(private Dadosservice:DadosService) { }

  ngOnInit() {
  }
  

  public newNome='';
  public newData ='';
  public newService='';
  public newHora='';
  public newObs='';

 


  add(){
    const newObjectAgenda ={
      id:1,
      nome:'fernando',
      data: this.newData,
      service:this.newService,
      hora: this.newHora,
      obs: this.newObs
    };

    this.dados.push(newObjectAgenda);
    this.newData='';
    this.newService='';
    this.newHora='';
    this.newObs='';
  }}
