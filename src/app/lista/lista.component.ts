import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {AlunoService} from '../aluno.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  listaDeAlunos: string[] = [];

  constructor(private service: AlunoService) {
    this.listaDeAlunos = this.service.listaDeAlunos;
  }
}
