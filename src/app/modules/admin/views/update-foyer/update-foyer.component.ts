import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Foyer } from 'src/app/core/models/foyer/foyer';
import { FoyerService } from 'src/app/core/services/foyer/foyer.service';

@Component({
  selector: 'app-update-foyer',
  templateUrl: './update-foyer.component.html',
  styleUrls: ['./update-foyer.component.scss'],
})
export class UpdateFoyerComponent implements OnInit {
  idFoyer!: number;

  constructor(
    private _foyer_service: FoyerService,
    private _route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.idFoyer = +params['idFoyer'];
      this.getInfoFoyer(this.idFoyer);
    });
  }

  updateFormFoyer = new FormGroup({
    idFoyer: new FormControl(''),
    nomFoyer: new FormControl('', Validators.required),
    capaciteFoyer: new FormControl('', Validators.required),
  });

  getInfoFoyer(idFoyer: number) {
    this._foyer_service.getById(idFoyer).subscribe((data) => {
      this.updateFormFoyer.patchValue({
        idFoyer: data.idFoyer,
        nomFoyer: data.nomFoyer,
        capaciteFoyer: data.capaciteFoyer,
      });
    });
  }
  modifierFoyer() {
    const formData = this.updateFormFoyer.value;
    const capaciteFoyerValue = formData.capaciteFoyer;
    const capaciteFoyer = Number(capaciteFoyerValue);
    const foyerr: Foyer = {
      idFoyer: this.idFoyer,
      nomFoyer: formData.nomFoyer || '',
      capaciteFoyer: capaciteFoyer,
    };
    this._foyer_service.modifierFoyer(foyerr).subscribe(
      (updatedFoyer: any) => {
        console.log('Foyer mis à jour avec succès:', updatedFoyer);
      },
      (error: any) => {
        console.error('Erreur lors de la mise à jour du foyer:', error);
      }
    );
  }
}
