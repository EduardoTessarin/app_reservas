import { Component, OnInit } from '@angular/core';
import { DadosService } from '../service/dados.service';
import { NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
 
  public dados = this.dadosService.reg();

  submitted = false;
  loginForm: FormGroup;
  loginError: string = '';

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off-outline';

  constructor(private dadosService:DadosService,public router: Router, private auth: AuthService,
    fb: FormBuilder ){

      let login = { email: '', password: '', lastpassword: false, nome:'', sexo:'' };
    let lastpasswordStorage = JSON.parse(localStorage.getItem('lastpassword'));

    if (lastpasswordStorage != null) {
      login.lastpassword = lastpasswordStorage.lastpassword;
      login.email = lastpasswordStorage.email;
      login.password = lastpasswordStorage.password;
    }

    this.loginForm = fb.group({
      email: [login.email, Validators.compose([Validators.required, Validators.email])],
      password: [login.password, Validators.compose([Validators.required, Validators.minLength(6)])],
      nome: [login.nome, Validators.compose([Validators.required, Validators.minLength(6)])],
      sexo: [login.sexo, Validators.compose([Validators.required, Validators.minLength(6)])],
      lastpassword: [login.lastpassword]
    });
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

  onSignup() {
    let data = this.loginForm.value;
    this.submitted = true;

    if (this.loginForm.valid) {
      let credentials = {
        email: data.email,
        password: data.password
      };
      //Se o usuário não existir, irá cadastrar automaticamente
      this.auth.signUp(credentials)
        .then(
          () => this.router.navigateByUrl('/home'),
          error => {
            this.loginError = error.message;
            console.log(error.message);
          });
    }
    //  this.router.navigateByUrl('/signup');
  }

}
