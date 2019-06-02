import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefasComponent } from './tarefas/tarefas.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { TarefaDetailComponent }  from './tarefa-detail/tarefa-detail.component';


const routes: Routes = [
  { path: 'tarefas', component: TarefasComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detalhe/:id', component: TarefaDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}