import { Component } from '@angular/core';
import { AutenticationService } from './shared/services/autentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login';
  
  constructor(private loginPrd: AutenticationService){}

  email!: string;

  public visualizarMenu(): boolean{
    return this.loginPrd.habilitarLogin()
  }

  public onEmail(event: string){
    this.email = event;
  }
}
