import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environements/environement';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  private url = environment.baseUrl;
  constructor(private _http: HttpClient) {}

  login(payload: any) {
    return this._http.post(`${this.url}/auth/login`, payload);
  }
}
