import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  resultado: string = '';
  botoesLongos: string[] = ['C', 'CE'];
  botoes: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=', '+'];

  private valorAnterior: string = '';
  private valorAtual: string = '';

  addExpressao(valor: string) {
    if (this.resultado !== '') {
      this.valorAnterior = this.valorAtual;
      this.valorAtual = valor;
    }

    if (valor === 'C') {
      this.resultado = '';
    } else if (valor == 'CE') {
      this.resultado = this.valorAnterior !== '=' ? this.resultado.slice(0, -1) : this.resultado;
    } else if (valor === '=') {
      this.resultado = eval(this.resultado);
    } else {
      this.resultado += valor;
    }
  }
}
