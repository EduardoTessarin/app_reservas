import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public newData ='';
  public newService='';
  public newHora='';
  public newObs='';

  public agendamento=[
    {}
  ]


  add(){
    const newObjectAgenda ={
      Nome:'',
      Data:this.newData,
      Servico:this.newService,
      Hora:this.newHora,
      obs:this.newObs,
    };
    this.agendamento.push(newObjectAgenda);
  }}
