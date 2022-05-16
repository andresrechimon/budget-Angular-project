import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  constructor(private bs:BudgetService,
              private router:Router) { }

  ngOnInit(): void {
    if(this.bs.budget === 0){
      this.router.navigate(['/input-budget']);
    }
    console.log(this.bs.budget);
  }

}
