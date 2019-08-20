import {Injectable} from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListServices {
  quantity = 17676;

  constructor() {
  }

  getQuantity() {
    return of(this.quantity)
      ;
  }
}
