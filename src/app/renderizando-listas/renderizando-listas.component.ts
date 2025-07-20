import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css'],
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    { id: 1, nome: 'iPhone 15', descricao: 'O melhor', esgotado: false },
    { id: 2, nome: 'Samsung', descricao: 'Ruim', esgotado: false },
    { id: 3, nome: 'iPhone 16', descricao: 'O melho', esgotado: true },
    { id: 4, nome: 'Motorola', descricao: 'O melho', esgotado: false },
    { id: 5, nome: 'Epson', descricao: 'O melho', esgotado: true }
  ];
}
