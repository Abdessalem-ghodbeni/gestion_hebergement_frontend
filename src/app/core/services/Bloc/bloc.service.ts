import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environements/environement';
import { Bloc } from '../../models/Bloc/bloc';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlocService {
  private backUrl = environment.baseUrl + '/bloc';
  constructor(private _http: HttpClient) {}

  getAllBlocs() {
    return this._http.get(`${this.backUrl}/all/blocs`).pipe(
      catchError((error) => {
        console.log('errrr', error);
        throw error;
      })
    );
  }

  addBloc(bloc: Bloc) {
    return this._http.post(`${this.backUrl}/add`, bloc).pipe(
      catchError((error) => {
        console.log('errrr', error);
        throw error;
      })
    );
  }

  updateBloc(bloc: Bloc) {
    return this._http.put(`${this.backUrl}/edit/`, bloc).pipe(
      catchError((error) => {
        console.log('errrr', error);
        throw error;
      })
    );
  }

  getBlocById(idBloc: number) {
    return this._http.get<Bloc>(`${this.backUrl}/recupere_bloc/${idBloc}`).pipe(
      catchError((error) => {
        console.log('errrr', error);
        throw error;
      })
    );
  }

  deleteBloc(idBloc: number) {
    return this._http.delete(`${this.backUrl}/delete/${idBloc}`).pipe(
      catchError((error) => {
        console.log('errrr', error);
        throw error;
      })
    );
  }

  // affecterChambresABloc(idChambre: number[], idBloc: number) {
  //   return this._http.put(
  //     `${this.backUrl}/affecterChambreA_Bloc/${idBloc}`,
  //     idChambre
  //   ).pipe(
  //     catchError((error) => {
  //       console.log('errrr', error);
  //       throw error;
  //     })
  //   );
  // }

  // affecterBlocAFoyer(idBloc: number, idFoyer: number) {
  //   return this._http.put(
  //     `${this.backUrl}/bloc/affecterBlocFoyer/${idBloc}/${idFoyer}`,
  //     null
  //   ).pipe(
  //     catchError((error) => {
  //       console.log('errrr', error);
  //       throw error;
  //     })
  //   );
  // }
}
