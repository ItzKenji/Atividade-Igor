import { Component } from '@angular/core';

@Component({
  selector: 'app-centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.css']
})
export class CentroComponent {

  obterFundoCentro(){

    return ['fundo'];

  }

  obterFontSlogan(){

    return ['tituloSlogan'];

  }

  obterDescricao(){

    return ['descricao'];

  }

}
