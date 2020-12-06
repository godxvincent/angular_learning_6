import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) {

    // probando a cambiar el git commit
    // Lee un parámetro directamente de la petición
    console.log('Parametro recuperado con snapshot ' + this.activatedRoute.parent.snapshot.paramMap.get('id'));
    // Lee todos los parametros de la petición
    this.activatedRoute.parent.params.subscribe( queryStrings => {
        console.log('Parametros del padre leidos por el hijo');
        console.log(queryStrings);
    });
   }

  ngOnInit(): void {
  }

}
