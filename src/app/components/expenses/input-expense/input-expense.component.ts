import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-input-expense',
  templateUrl: './input-expense.component.html',
  styles: [
    `
    button{
      width: 100%;
    }

    label{
      font-weight: 600;
      font-size: 1.2rem;
    }
    `
  ]
})
export class InputExpenseComponent implements OnInit {
  kind:string = '';
  amount:number = 0;
  invalidForm:boolean = false;
  textError:string = '';
  
  constructor(private bs:BudgetService) { }
  
  ngOnInit(): void {
  }
  
  addExpense(){
    if(this.amount > this.bs.remaining){
      this.invalidForm = true;
      this.textError = '¡El gasto sobrepasa el presupuesto disponible!';
      return;
    }
    
    if(this.kind === '' || this.amount <= 0){
      this.invalidForm = true;
      this.textError = 'Nombre de gasto o cantidad incorrectos';
    }else{
      //CREATE EXPENSE OBJECT
      const EXPENSE = {
        kind: this.kind,
        amount: this.amount
      }
      //SEND THE OBJECT TO SUBJECT SUBSCRIBERS
      this.bs.addExpense(EXPENSE);
      //RESET FORM
      this.invalidForm = false;
      this.kind = '';
      this.amount = 0;
    }
  }
}
