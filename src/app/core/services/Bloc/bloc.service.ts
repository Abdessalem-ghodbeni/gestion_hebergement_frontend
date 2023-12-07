import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environements/environement';

@Injectable({
  providedIn: 'root',
})
export class BlocService {
  private backUrl = environment.baseUrl + '/bloc';
  constructor(private _http: HttpClient) {}

  getAllBlocs() {
    return this._http.get(`${this.backUrl}/all/blocs`);
  }
}
