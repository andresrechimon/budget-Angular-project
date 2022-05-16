import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit, OnDestroy {
  subscription:Subscription;
  listExpenses:any[] = [];
  budget!:number;
  remaining!:number;

  constructor(private bs:BudgetService) { 
    this.subscription = this.bs.getExpense()
           .subscribe(data => {
            this.remaining = this.remaining - data.amount;
            this.listExpenses.push(data);
           })
  }

  ngOnInit(): void {
    this.budget = this.bs.budget;
    this.remaining = this.bs.remaining;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  applyBackgroundColor(){
    if(this.budget / 4 > this.remaining){
      return 'alert alert-danger'
    } else if(this.budget / 2 > this.remaining){
      return 'alert alert-warning'
    }else{
      return 'alert alert-info'
    }
  }
}
