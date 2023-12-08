import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantLayoutComponent } from './layouts/etudiant-layout/etudiant-layout.component';
import { ListeFoyerComponent } from './views/liste-foyer/liste-foyer.component';
import { DetailsFoyerComponent } from './views/details-foyer/details-foyer.component';

const routes: Routes = [
  {
    path: '',
    component: EtudiantLayoutComponent,
    children: [
      { path: 'liste_foyer', component: ListeFoyerComponent },
      { path: 'details/foyer/:idFoyer', component: DetailsFoyerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtudiantRoutingModule {}
