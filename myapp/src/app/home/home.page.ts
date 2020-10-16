import { Component } from '@angular/core';
import { timeStamp } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public saldo =0;
  public valor =0
  
  public incrementar(){
    this.saldo = this.valor
  }
  public reset(){
    this.saldo = 0;
  }

  public saque(){
   this.saldo -= this.valor;
   if (this.saldo <0) {
    this.saldo = 0;
   }
}
}
