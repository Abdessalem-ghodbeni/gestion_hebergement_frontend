import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Universite } from 'src/app/core/models/Universite/universite';
import { Foyer } from 'src/app/core/models/foyer/foyer';
import { UniversityService } from 'src/app/core/services/Universite/university.service';
import { FoyerService } from 'src/app/core/services/foyer/foyer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-foyer',
  templateUrl: './liste-foyer.component.html',
  styleUrls: ['./liste-foyer.component.scss'],
})
export class ListeFoyerComponent {
  ListeFoyer: Foyer[] = [];
  showMe: boolean = false;
  id_Foyer!: number;
  searchTerm: string = '';
  searchArray() {
    if (this.searchTerm === '') {
      this.ListeFoyer = [...this.ListeFoyer];
    } else {
      this.ListeFoyer = this.ListeFoyer.filter((item) =>
        item.nomFoyer.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
  constructor(private _foyer_service: FoyerService, private _router: Router) {}
  ngOnInit(): void {
    if (this.GetAllFoyer() == null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'IPas de foyer pour le moment !',
      });
    } else {
      this.GetAllFoyer();
    }
  }

  GetAllFoyer() {
    return this._foyer_service
      .RecupererTousLesFoyer()
      .subscribe((data: any) => {
        this.ListeFoyer = data;
        console.log('hero ', this.ListeFoyer);
      });
  }
  sendId(id: number) {
    this.id_Foyer = id;
    console.log(this.id_Foyer);
    this.showMe = !this.showMe;
  }

  supprimerFoyer(id: number) {
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
        this._foyer_service.deleteFoyer(id).subscribe(() => {
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          });
          this.GetAllFoyer();
        });
        this.GetAllFoyer();
      }
      this.GetAllFoyer();
    });
  }

  getFoyerParId() {
    return this._foyer_service.getById(2).subscribe((data) => {
      console.log('data');
    });
  }

  voirDetails(idFoyer: number) {
    this._router.navigate(['/admin/details/foyer/', idFoyer]);
  }
  updateFoyer(idFoyer: number) {
    this._router.navigate(['/admin/edit/foyer/', idFoyer]);
  }
}
