import { Injectable } from '@angular/core';
import { IMenu } from 'src/app/models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  private listMenu: IMenu[] = [
    {
      nombre: "canelones",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imagen: "https://assets.unileversolutions.com/recipes-v2/209558.jpg"
    },
    {
      nombre: "pizza",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imagen: "https://assets.elgourmet.com/wp-content/uploads/2023/03/pizza_Mh3H4eanyBKEsStv1YclPWTf9OUqIi.png"
    },
    {
      nombre: "milanesa",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imagen: "https://cdn0.recetasgratis.net/es/posts/4/9/8/milanesa_de_carne_11894_orig.jpg"
    }
  ];

  add(menu: IMenu) {
    this.listMenu.push(menu);
  }

  list(): IMenu[] {
    return this.listMenu;
  }

  delete(indice: number){
    this.listMenu.splice(indice, 1);
  }
}
