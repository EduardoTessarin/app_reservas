import { Component, OnInit } from '@angular/core';
import { DadosService } from 'src/app/service/dados.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {

  public dados = this.dadosService.reg();

  constructor( private dadosService: DadosService) { }

  ngOnInit() {
  }

}
