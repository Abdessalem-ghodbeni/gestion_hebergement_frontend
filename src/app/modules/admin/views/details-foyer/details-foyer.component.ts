import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foyer } from 'src/app/core/models/foyer/foyer';
import { FoyerService } from 'src/app/core/services/foyer/foyer.service';

@Component({
  selector: 'app-details-foyer',
  templateUrl: './details-foyer.component.html',
  styleUrls: ['./details-foyer.component.scss'],
})
export class DetailsFoyerComponent {
  idFoyer!: number;
  foyer!: Foyer;
  constructor(
    private _foyerService: FoyerService,
    private _route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      // this.idFoyer = +params['id'];
      this.idFoyer = +params['idFoyer'];
      this.getFoyerByIdentifiant(this.idFoyer);
    });
  }

  getFoyerByIdentifiant(idFoyer: number) {
    return this._foyerService.getById(idFoyer).subscribe((data) => {
      this.foyer = data;
      console.log(this.foyer);
    });
  }
}
