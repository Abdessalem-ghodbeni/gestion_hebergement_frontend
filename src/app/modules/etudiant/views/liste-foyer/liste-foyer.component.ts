import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Foyer } from 'src/app/core/models/foyer/foyer';
import { FoyerService } from 'src/app/core/services/foyer/foyer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-foyer',
  templateUrl: './liste-foyer.component.html',
  styleUrls: ['./liste-foyer.component.scss'],
})
export class ListeFoyerComponent implements OnInit {
  showMee(idFoyer: number) {
    this._router.navigate(['etudiant/details/foyer/', idFoyer]);
  }
  ListeFoyer: Foyer[] = [];

  id_Foyer!: number;
  searchTerm: string = '';

  searchArray() {
    if (!this.searchTerm) {
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
  }

  getFoyerParId() {
    return this._foyer_service.getById(2).subscribe(() => {
      console.log('data');
    });
  }
}
