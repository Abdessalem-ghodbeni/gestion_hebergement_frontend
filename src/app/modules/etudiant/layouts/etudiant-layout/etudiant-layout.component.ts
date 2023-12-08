import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant-layout',
  templateUrl: './etudiant-layout.component.html',
  styleUrls: ['./etudiant-layout.component.scss', '../../frontcss.css'],
  encapsulation: ViewEncapsulation.None,
})
export class EtudiantLayoutComponent {
  constructor(private _router: Router) {}
  logout() {
    this._router.navigate(['home']);
    localStorage.clear();
  }
}
