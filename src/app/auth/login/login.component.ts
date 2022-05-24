import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  usuario = {
    email: '',
    password: ''
  }

  login(){

    const {email, password} = this.usuario;

    this.authService.login(email, password).then(res => {
      alert("Sesión  iniciada");
    });

    

  }

  loginWithGoogle(){
    const {email, password} = this.usuario;
      this.authService.loginWithGoogle(email, password);
  }

  

}
