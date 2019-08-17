import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListServices {
  constructor() {
  }

  getQuantity() {
    return Math.random();
  }
}
