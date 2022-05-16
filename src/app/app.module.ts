import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//COMPONENTS
import { AppComponent } from './app.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { InputBudgetComponent } from './components/input-budget/input-budget.component';
import { InputExpenseComponent } from './components/expenses/input-expense/input-expense.component';
import { ListExpenseComponent } from './components/expenses/list-expense/list-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    InputBudgetComponent,
    InputExpenseComponent,
    ListExpenseComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
