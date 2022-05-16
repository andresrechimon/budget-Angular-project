import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-input-budget',
  templateUrl: './input-budget.component.html',
  styles: [
    `
    button{
      width: 100%;
    }

    .title{
      margin-bottom: -10px;
    }
    `
  ]
})
export class InputBudgetComponent {
  quantity:number = 0;
  invalidQuantity:boolean = false;

  constructor(private bs:BudgetService,
              private router:Router) { }

  setBudget(){
    if(this.quantity > 0){
       this.bs.budget = this.quantity;
      this.bs.remaining = this.quantity; 
      this.invalidQuantity = false;
      this.router.navigateByUrl('/expenses');
    }else{
      this.invalidQuantity = true;
    }
  }
}
