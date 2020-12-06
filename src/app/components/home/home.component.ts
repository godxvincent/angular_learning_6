import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-clases></app-clases>

    <!-- Con las llaves cuadradas angular le indica a la directiva que va a recibir parametros desde el html
    asi mismo esto me hace pensar que angular tiene directivas personalizadas como [src] -->
    <p [appResaltado]="'orange'">
        Hola mundo desde app.component
    </p>

    <app-switch></app-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
