import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantLayoutComponent } from './layouts/etudiant-layout/etudiant-layout.component';

const routes: Routes = [{ path: '', component: EtudiantLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtudiantRoutingModule {}
