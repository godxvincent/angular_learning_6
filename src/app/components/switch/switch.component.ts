import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styles: [
  ]
})
export class SwitchComponent implements OnInit {

  indice = 0;
  alertas = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

  constructor() { }

  ngOnInit(): void {
  }

  valorAlerta(): string {
    return this.alertas[this.indice];
  }

  cambiarAlerta(forward: boolean): void {
    let incremento: number;
    if ( forward ) {
      incremento = 1;
    } else {
      incremento = -1;
    }

    if ((this.indice + incremento) < this.alertas.length && (this.indice + incremento) > 0) {
        this.indice = this.indice + incremento;
    } else {
      if ( (this.indice + incremento) < 0 ) {
        this.indice = this.alertas.length - 1;
      } else {
        this.indice = 0;
      }
    }
  }

}
