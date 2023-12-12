import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/core/models/Bloc/bloc';
import { BlocService } from 'src/app/core/services/Bloc/bloc.service';
import Swal from 'sweetalert2';
import { NgZone } from '@angular/core';
@Component({
  selector: 'app-liste-bloc',
  templateUrl: './liste-bloc.component.html',
  styleUrls: ['./liste-bloc.component.scss'],
})
export class ListeBlocComponent implements OnInit {
  ListBlocs: Bloc[] = [];
  UpdateBlocForm!: FormGroup;

  constructor(
    private _blocService: BlocService,
    private _router: Router,
    private _builder: FormBuilder,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.getAllBlocs();
    this.UpdateBlocForm = this._builder.group({
      nomBloc: ['', Validators.required],
      capaciteBloc: ['', Validators.required],
    });
  }
  getAllBlocs() {
    this._blocService.getAllBlocs().subscribe({
      next: (data: any) => {
        if (data.length == 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Accun bloc trouvé',
          });
        } else {
          console.log(data);
          this.ListBlocs = data;
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

  deleteBloc(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this._blocService.deleteBloc(id).subscribe(() => {
          this.getAllBlocs();
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          });

          this.getAllBlocs();
          this.cdr.detectChanges();
        });
      }
    });
  }

  retournerVersListeBloc() {
    console.log('yes');
  }
  getIdBloc(id: number) {
    this._blocService.getBlocById(id).subscribe({
      next: (data: Bloc) => {
        this.UpdateBlocForm.patchValue(data);
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

  updateBloc() {
    if (this.UpdateBlocForm.valid) {
      this._blocService.updateBloc(this.UpdateBlocForm.value).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'bloc completed Updated  successfully.',
          });
          this.getAllBlocs();
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
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Invalid data!',
    });
  }
  detailsById(idbloc: number) {
    this._router.navigate(['admin/details_bloc/' + idbloc]);
  }
  affecter(idbloc: number) {
    this._router.navigate(['admin/affecter_foyer_bloc/' + idbloc]);
  }
}
