import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListServices {
  quantity: Observable<number> = of(1);
  constructor() {
  }

  getQuantity(): Observable<number> {
    return this.quantity;
  }
}
