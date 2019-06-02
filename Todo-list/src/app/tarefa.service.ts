import { Injectable } from '@angular/core';
import { Tarefa } from './tarefas/tarefa';
import { TAREFAS } from './tarefas/mock-tarefa'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  getTarefas() : Observable<Tarefa[]>{
    return of(TAREFAS)
  }

  getTarefa(id: number): Observable<Tarefa> {
    // TODO: send the message _after_ fetching the hero
    return of(TAREFAS.find(tarefa => tarefa.id === id));
  }
}
