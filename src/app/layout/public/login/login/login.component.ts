import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticationService } from 'src/app/shared/services/autentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  expresionRegular = /@frc\.utn\.edu\.ar/;

  public myForm!: FormGroup;

  @Output() email: EventEmitter<string> = new EventEmitter();

  constructor(private fb: FormBuilder, private loginPrd: AutenticationService){}

  ngOnInit(): void{
    this.myForm = this.createMyForm();
  }

  private createMyForm(): FormGroup{
    return this.fb.group({
      usuario: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  public submitFormulario(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control =>{
        control.markAllAsTouched();
      })
    }
    else if(!this.loginPrd.validar(this.myForm.value.usuario, this.myForm.value.password)){
      alert("Email o Contraseña incorrecta");
    }
    else{
      this.email.emit(this.myForm.value.usuario);
    }
  }

  public get f(): any{
    return this.myForm.controls;
  }
}
