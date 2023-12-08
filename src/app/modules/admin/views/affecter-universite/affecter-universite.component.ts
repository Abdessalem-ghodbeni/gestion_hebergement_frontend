import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Universite } from 'src/app/core/models/Universite/universite';
import { UniversityService } from 'src/app/core/services/Universite/university.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-affecter-universite',
  templateUrl: './affecter-universite.component.html',
  styleUrls: ['./affecter-universite.component.scss'],
})
export class AffecterUniversiteComponent implements OnInit {
  @Input() inputData: number | undefined;
  listeUniversite: Universite[] = [];
  affectForm!: FormGroup;
  selectedIdFoyer!: number;

  constructor(
    private _universite_service: UniversityService,
    private _builder: FormBuilder
  ) {}
  edit() {
    console.log('im here ', this.inputData, 'data', this.affectForm.value);
  }
  ngOnInit(): void {
    this.getAllUniversity();
    this.affectForm = this._builder.group({
      nomUniversite: ['', Validators.required],
    });
  }

  // affecterFoyerToUniversity() {
  //   const nomUniversite = String(this.affectForm.get('nomUniversite')?.value);
  //   this.selectedIdFoyer = Number(this.inputData);
  //   if (this.affectForm.valid) {
  //     this._universite_service
  //       .affecter(nomUniversite, this.selectedIdFoyer)
  //       .subscribe({
  //         next: (data) => {
  //           console.log('welcome');
  //         },
  //       });
  //   }
  // }
  affecterFoyerToUniversity() {
    const nomUniversite = String(this.affectForm.get('nomUniversite')?.value);
    this.selectedIdFoyer = Number(this.inputData);
    if (this.affectForm.valid) {
      this._universite_service
        .affecter(nomUniversite, this.selectedIdFoyer)
        .subscribe({
          next: (data) => {
            console.log('welcome');
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }
  resetForm() {
    this.affectForm.reset();
  }
  getAllUniversity() {
    this._universite_service.getAllUniversity().subscribe({
      next: (data: object) => {
        this.listeUniversite = data as Universite[];
        console.log('maram', this.listeUniversite);
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'IPas de foyer pour le moment !',
        });
      },
    });
  }
}
