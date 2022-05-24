import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  usuario = {
    email: '',
    password: ''
  }

  register(){
    const {email, password} = this.usuario;

    this.authService.register(email, password).then(res => {
      alert("Registrado correctamente");
    });
  }

}
