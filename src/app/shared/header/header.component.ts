import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private eRef: ElementRef, private authService : AuthService) { }

  ngOnInit(): void {
  }

  menuActivado : boolean = false;
  menuSorteosActivado : boolean = false;
  menuDecisionesActivado : boolean = false;

  usuarioLogueado = this.authService.getUserLogged();
  
  
  
  printUsuarioLog(){
    

    this.authService.getUserLogged().subscribe(res => {
      console.log(res?.email);
    
    });
  }

  logOut(){
    this.authService.logOut();
    
  }

  toggleMenu (){
    this.menuActivado = !this.menuActivado;
  }

  toggleMenuSorteos(){

    
    this.menuDecisionesActivado = false;

    this.menuSorteosActivado = !this.menuSorteosActivado;
  }

  toggleMenuDecisiones(){
    this.menuSorteosActivado = false;

    this.menuDecisionesActivado = !this.menuDecisionesActivado;
  }

  @HostListener('document:click', ['$event'])
  clickOut(event: any){
    if (!this.eRef.nativeElement.contains(event.target)){
      this.menuDecisionesActivado = false;
      this.menuSorteosActivado = false;
    }
  }



  

    

}
