import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DadosService } from 'src/app/service/dados.service';
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  public dados = this.dadosService.all();
  
  constructor(private dadosService:DadosService) { }

  ngOnInit() {
  }



}