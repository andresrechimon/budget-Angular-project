import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budget:number = 0;
  remaining:number = 0;
  private expenses$ = new Subject<any>();

  constructor() { }

  addExpense(expense:any){
    this.remaining = this.remaining - expense.amount;
    this.expenses$.next(expense);
  }

  getExpense(): Observable<any>{
    return this.expenses$.asObservable();
  }
}
