import { Component, Input, OnInit } from '@angular/core';
import { IMenu } from 'src/app/models/menu';
import { AutenticationService } from 'src/app/shared/services/autentication.service';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  @Input() email!: string;

  localMenuList: IMenu [] = [];

  showDiv: boolean = false;

  constructor(private loginPrd: AutenticationService, private menuServices: MenuService){}

  public onCerrarSesion(){
    this.loginPrd.cerrarSesion();
  }

  public onBorrar(event: IMenu){
    this.menuServices.delete(this.localMenuList.indexOf(event));
    console.log(this.menuServices.list);
  }

  ngOnInit(): void{
    this.localMenuList = this.menuServices.list();
  }
}
