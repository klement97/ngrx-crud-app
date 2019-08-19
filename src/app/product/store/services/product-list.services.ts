import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductListServices {
  // quantity: Observable<number> = of(1);
  quantity = 17676;
  constructor() {
  }

  getQuantity() {
    return of(this.quantity)
    ;
  }
}
