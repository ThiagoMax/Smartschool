import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = 'Professores';
  public professores = [
    { id: 1, nome: 'Thiago', disciplina: 'Física'},
    { id: 2, nome: 'Maju', disciplina: 'Português'},
    { id: 3, nome: 'Valmir', disciplina: 'História'},
    { id: 4, nome: 'Jorge', disciplina: 'Matemática'}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
