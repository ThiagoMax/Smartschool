import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';
  public alunos = [
    { id: 1, nome: 'Marta', sobrenome: "Maria", telefone: 32876541},
    { id: 2, nome: 'Paula', sobrenome: "Fernandes", telefone: 46932487},
    { id: 3, nome: 'Laura', sobrenome: "Lin", telefone: 632195547},
    { id: 4, nome: 'Luíza', sobrenome: "Mel", telefone: 12649348},
    { id: 5, nome: 'Lucas', sobrenome: "Aparecido", telefone: 11537419},
    { id: 6, nome: 'Pedro', sobrenome: "Moura", telefone: 15638795},
    { id: 7, nome: 'Paulo', sobrenome: "Cascalho", telefone: 99753461}
  ];
  public alunoSelected: string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

  public SelectAluno(aluno: any){
    this.alunoSelected = aluno.nome + " " + aluno.sobrenome;
  }

}
