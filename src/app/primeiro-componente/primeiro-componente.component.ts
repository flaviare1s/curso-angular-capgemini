import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css'],
})
export class PrimeiroComponenteComponent {
  saudacao = 'Hello, World';
  nome = 'João';
  dataNascimento = '1995-01-01';
  urlImagem = '/assets/joao.png';

  mostrarDataNascimento() {
    alert(`A data de nascimento do João é ${this.dataNascimento}`)
  }
}
