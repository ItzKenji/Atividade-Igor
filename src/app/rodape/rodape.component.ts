import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent {

  valor; 

  gerarValor(){

    this.valor = Math.round(Math.random() * 100) + 1;

  }

  obterTituloRodape(){

    return ['tituloRodape'];

  }

}
