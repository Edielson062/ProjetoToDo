import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AlunoService} from '../aluno.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nomeAluno: string = '';

  constructor(private service :AlunoService, private router: Router) {
  }

  adicionarAluno(){
    this.service.adicionarAluno(this.nomeAluno);
    this.router.navigateByUrl('/lista');
  }
}
