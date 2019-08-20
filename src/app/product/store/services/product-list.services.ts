import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from 'ngrx-data';
import {ProductModel} from 'src/app/product/store/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductListServices extends EntityCollectionServiceBase<ProductModel> {
  constructor(entityCollectionServiceFactory: EntityCollectionServiceElementsFactory) {
    super('Product', entityCollectionServiceFactory);
  }
}
