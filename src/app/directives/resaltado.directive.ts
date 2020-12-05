import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {


  @Input('appResaltado') colorDeseado: string;

  constructor( private elementRef: ElementRef) {
    console.log('Directiva Llamada');
    this.elementRef.nativeElement.style.backgroundColor = this.colorDeseado;
  }


  @HostListener('mouseenter')
  mouseEntro(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave')
  mouseSalio(): void {
    this.elementRef.nativeElement.style.backgroundColor = this.colorDeseado;
  }

}
