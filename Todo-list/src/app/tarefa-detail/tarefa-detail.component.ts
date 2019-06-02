import { Component, OnInit, Input } from '@angular/core';
import { Tarefa } from '../tarefas/tarefa';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TarefaService } from '../tarefa.service'

@Component({
  selector: 'app-tarefa-detail',
  templateUrl: './tarefa-detail.component.html',
  styleUrls: ['./tarefa-detail.component.css']
})
export class TarefaDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private tarefaService: TarefaService,
              private location: Location
              ) { }

  ngOnInit(): void {
    this.getTarefa();
  }
  
  getTarefa(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tarefaService.getTarefa(id)
      .subscribe(selectedTarefa => this.selectedTarefa = selectedTarefa);
  }

  @Input() selectedTarefa: Tarefa

  goBack(): void {
    this.location.back();
  }
}
