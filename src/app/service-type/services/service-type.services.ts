import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from 'src/app/auth/user.model';
import {environment} from 'src/environments/environment';
import {ServiceTypeModel} from 'src/app/service-type/models/service-type.model';

const HOST = environment.API_HOST_URL;
const API_SERVICE_TYPES_URL = `${HOST}/service_types`;
const API_PUT_SERVICE_TYPE = `${HOST}/manager/service_types`;
const API_CREATE_SERVICE_TYPE = `${HOST}/manager/service_types/create`;

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeServices {
  constructor(private http: HttpClient) {
    this.currentTokenSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem(this.CURRENT_TOKEN)));
    this.currentToken = this.currentTokenSubject.asObservable();
  }

  private readonly CURRENT_TOKEN = 'user';

  private currentTokenSubject: BehaviorSubject<UserModel>;
  public currentToken: Observable<UserModel>;

  public getCurrentTokenValue(): UserModel {
    return this.currentTokenSubject.value;
  }

  getAll() {
    const userToken = this.getCurrentTokenValue();
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders.append('Authorization', 'Bearer ' + userToken);
    return this.http.get(API_SERVICE_TYPES_URL + `/`, {headers: httpHeaders});
  }

  update(serviceType) {
    const id = serviceType.id;
    const userToken = this.getCurrentTokenValue();
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders.append('Authorization', 'Bearer ' + userToken);
    return this.http.put(`${API_PUT_SERVICE_TYPE}/${id}/`, serviceType, {headers: httpHeaders});
  }

  delete(id) {
    const userToken = this.getCurrentTokenValue();
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders.append('Authorization', 'Bearer ' + userToken);
    return this.http.delete(`${API_PUT_SERVICE_TYPE}/${id}/`, {headers: httpHeaders});
  }

  add(serviceType) {
    const userToken = this.getCurrentTokenValue();
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders.append('Authorization', 'Bearer ' + userToken);
    return this.http.post(`${API_CREATE_SERVICE_TYPE}/`, serviceType, {headers: httpHeaders});
  }
}
