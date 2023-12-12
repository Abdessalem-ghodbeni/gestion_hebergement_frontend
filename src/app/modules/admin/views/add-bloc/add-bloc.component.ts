import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bloc } from 'src/app/core/models/Bloc/bloc';
import { BlocService } from 'src/app/core/services/Bloc/bloc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.scss']
})
export class AddBlocComponent {
  constructor(private _blocService: BlocService) {}
  addBlocForm = new FormGroup({
    nomBloc: new FormControl('', Validators.required),
    capaciteBloc: new FormControl('', Validators.required),
  });
  resetForm() {
    this.addBlocForm.reset();
  }
  creatNewBloc() {
    const data = this.addBlocForm.value as unknown as Bloc;
    if (this.addBlocForm.valid) {
      this._blocService.addBloc(data).subscribe(
        ( ) => {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'bloc completed added  successfully.',
          });
        },
        ( ) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'data invalid!',
      });
    }
  }
}
