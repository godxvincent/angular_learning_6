import { Component,
        OnInit,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy } from '@angular/core';

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
export class HomeComponent implements OnInit,
                      DoCheck,
                      AfterContentInit,
                      AfterContentChecked,
                      AfterViewInit,
                      AfterViewChecked,
                      OnDestroy {

  constructor() {
    console.log('constructor');
   }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
