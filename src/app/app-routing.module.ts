import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//COMPONENTS
import { ExpensesComponent } from './components/expenses/expenses.component';
import { InputBudgetComponent } from './components/input-budget/input-budget.component';

const routes: Routes = [
  {path: '', redirectTo: '/input-budget', pathMatch: 'full'},
  {path: 'input-budget', component: InputBudgetComponent},
  {path: 'expenses', component: ExpensesComponent},
  {path: '**', redirectTo: '/input-budget', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
