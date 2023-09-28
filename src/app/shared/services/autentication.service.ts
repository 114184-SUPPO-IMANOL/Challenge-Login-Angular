import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  private ingresar: boolean = false;

  constructor() { }


  public validar(email: string, password: string): boolean {
    const textoBuscado = "@frc.utn.edu.ar";
    this.ingresar = email.includes(textoBuscado) && password == "45084386";
    return this.ingresar;
  }

  public habilitarLogin(){
    return this.ingresar;
  }

  public cerrarSesion(){
    this.ingresar = false;
  }
}
