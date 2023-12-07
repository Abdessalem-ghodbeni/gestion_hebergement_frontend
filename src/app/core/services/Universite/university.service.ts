import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environements/environement';

@Injectable({
  providedIn: 'root',
})
export class UniversityService {
  private back_url = environment.baseUrl + '/university';
  constructor(private _http: HttpClient) {}
  getAllUniversity() {
    return this._http.get(`${this.back_url}/all_university`);
  }
}
