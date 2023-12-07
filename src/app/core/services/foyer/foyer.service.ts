import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environements/environement';
import { Foyer } from '../../models/foyer/foyer';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoyerService {
  private backend_url = environment.baseUrl + '/api/logement';
  constructor(private _http: HttpClient) {}
  AjouterFoyer(foyer: Foyer, idUniversite: number) {
    return this._http
      .put(`${this.backend_url}/addAndAffecte/` + idUniversite, foyer)
      .pipe(
        catchError((error) => {
          console.log('errrr', error);
          throw error;
        })
      );
  }

  RecupererTousLesFoyer() {
    return this._http.get(`${this.backend_url}/get/all_foyes`).pipe(
      catchError((error) => {
        console.log('error', error);
        throw error;
      })
    );
  }
  deleteFoyer(id: number): Observable<any> {
    return this._http.delete(`${this.backend_url}/supprimer/foyer/${id}`).pipe(
      catchError((error) => {
        console.log('errrr', error);
        throw error;
      })
    );
  }
  getById(idFoyer: number): Observable<any> {
    return this._http.get(`${this.backend_url}/get/foyer/${idFoyer}`);
  }
  modifierFoyer(foyer: Foyer) {
    return this._http.put(`${this.backend_url}/api/logement/edit`, foyer).pipe(
      map((response: any) => response),
      catchError((error) => {
        console.log('qulque chose mal passé', error);
        throw error;
      })
    );
  }
}
