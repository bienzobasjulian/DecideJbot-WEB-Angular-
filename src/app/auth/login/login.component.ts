import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService,
    private router: Router) { }


  usuarioLogueado = this.authService.getUserLogged();
  
  public isLogged = false;


  async ngOnInit(): Promise<void> {

    const user = await this.authService.getCurrentUser();
    if (user){
      // console.log('User -> ', user);
      this.isLogged = true;
    }

    if (this.isLogged){
      this.router.navigate(['/']);
    }
     
  }

  usuario = {
    email: '',
    password: ''
  }

  



  login(){

    const {email, password} = this.usuario;

    this.authService.login(email, password);

    const user = this.authService.getUserLogged();

    if (user){
      this.router.navigate(['/']);
    }
    

    

    

  }

  loginWithGoogle(){
    const {email, password} = this.usuario;
      this.authService.loginWithGoogle(email, password);
  }

  

}
