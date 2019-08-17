import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListServices {
  constructor() {
  }

  getQuantity(): Observable<number> {
    return 2;
  }
}
