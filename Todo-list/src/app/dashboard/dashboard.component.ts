import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefas/tarefa';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  tarefas: Tarefa[] = [];

  constructor(private heroService: TarefaService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getTarefas()
      .subscribe(tarefas => this.tarefas = tarefas.slice(1, 5));
  }
}