import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  alertaStyle = 'alert-primary';
  propiedades = {
    danger : false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
