import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from 'src/app/auth/user.model';

const API_HOST_URL = `http://localhost:8000`;
const API_SERVICE_TYPES_URL = `${API_HOST_URL}/service_types`;

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
}
