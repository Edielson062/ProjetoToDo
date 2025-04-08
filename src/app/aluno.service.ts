import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  listaDeAlunos:string[] = [];

  adicionarAluno(nomeAluno :string){
    this.listaDeAlunos.push(nomeAluno);
  }
  constructor() { }
}
