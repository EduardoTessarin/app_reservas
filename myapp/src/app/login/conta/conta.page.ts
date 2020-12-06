import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DadosService } from 'src/app/service/dados.service';
import { AuthService} from '../../services/auth.service'
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