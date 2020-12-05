import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <!-- <p [ngStyle]="font-size: 10px;"> -->
    <p [style.fontSize.px]="tamano">
      Hola mundo esto es una etiqueta de prueba
    </p>
    <button class="btn btn-primary m-1" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary m-1" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamano = 25;
  constructor() { }

  ngOnInit(): void {
  }

}
