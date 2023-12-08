import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantLayoutComponent } from './layouts/etudiant-layout/etudiant-layout.component';
import { ListeFoyerComponent } from './views/liste-foyer/liste-foyer.component';
import { FormsModule } from '@angular/forms';
import { DetailsFoyerComponent } from './views/details-foyer/details-foyer.component';

@NgModule({
  declarations: [EtudiantLayoutComponent, ListeFoyerComponent, DetailsFoyerComponent],
  imports: [CommonModule, EtudiantRoutingModule, FormsModule],
})
export class EtudiantModule {}
