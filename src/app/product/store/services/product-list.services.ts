import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from 'ngrx-data';
import {ServiceTypeModel} from 'src/app/product/store/models/service-type.model';

@Injectable({
  providedIn: 'root'
})
export class ProductListServices extends EntityCollectionServiceBase<ServiceTypeModel> {
  constructor(entityCollectionServiceFactory: EntityCollectionServiceElementsFactory) {
    super('Product', entityCollectionServiceFactory);
  }
}
