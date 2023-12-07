import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Bloc } from 'src/app/core/models/Bloc/bloc';
import { Universite } from 'src/app/core/models/Universite/universite';
import { Foyer } from 'src/app/core/models/foyer/foyer';
import { BlocService } from 'src/app/core/services/Bloc/bloc.service';
import { UniversityService } from 'src/app/core/services/Universite/university.service';
import { FoyerService } from 'src/app/core/services/foyer/foyer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-foyer',
  templateUrl: './add-foyer.component.html',
  styleUrls: ['./add-foyer.component.scss'],
})
export class AddFoyerComponent implements OnInit {
  listeUniversite: Universite[] = [];

  constructor(
    private _universite_service: UniversityService,
    private _foyer_service: FoyerService
  ) {}
  ngOnInit(): void {
    this.recupererAllUniversite();
  }
  get blocsListe(): FormArray {
    // return <FormArray> this.AddFoyerForm.get("blocs");
    return this.addFormFoyer.get('blocs') as FormArray;
  }
  addBloc(): void {
    this.blocsListe.push(this.instacierBloc());
  }
  removeBloc(index: number): void {
    this.blocsListe.removeAt(index);
  }
  recupererAllUniversite() {
    this._universite_service.getAllUniversity().subscribe({
      next: (data: any) => {
        if (data.length > 0) {
          this.listeUniversite = data;
          console.log(this.listeUniversite);
        } else {
          Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'Liste university is empty',
          });
        }
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      },
    });
  }

  addFormFoyer = new FormGroup({
    nomFoyer: new FormControl('', Validators.required),
    capaciteFoyer: new FormControl('', Validators.required),
    idUniversite: new FormControl(''),
    blocs: new FormArray([this.instacierBloc()]),
  });

  instacierBloc() {
    return new FormGroup({
      nomBloc: new FormControl(''),
      capaciteBloc: new FormControl(''),
    });
  }

  // addFoyer() {
  //   // const payload_foyer = this.addFormFoyer.value;
  //   const formdata = this.addFormFoyer.value;
  //   const idUniversity = Number(formdata.idUniversite);
  //   delete formdata.idUniversite;
  //   if (this.addFormFoyer.valid && idUniversity !== undefined) {
  //     this._foyer_service.AjouterFoyer(formdata, idUniversity).subscribe({
  //       next: (data: any) => {},
  //       error: () => {},
  //     });
  //   }
  // }
  addFoyer() {
    const formdata = this.addFormFoyer.value;
    const payload_foyer: any = {
      nomFoyer: String(formdata.nomFoyer),
      capaciteFoyer: Number(formdata.capaciteFoyer),
      blocs: formdata.blocs?.map((bloc: any) => ({
        nomBloc: bloc.nomBloc,
        capaciteBloc: bloc.capaciteBloc,
      })),
    };

    const idUniversite = Number(formdata.idUniversite);

    if (this.addFormFoyer.valid && idUniversite !== undefined) {
      this._foyer_service.AjouterFoyer(payload_foyer, idUniversite).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Operation completed successfully.',
          });
        },
        error: () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        },
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid Data!',
      });
    }
  }
}
