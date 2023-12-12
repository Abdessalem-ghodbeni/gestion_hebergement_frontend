import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AddFoyerComponent } from './views/add-foyer/add-foyer.component';
import { ListeFoyerComponent } from './views/liste-foyer/liste-foyer.component';
import { UpdateFoyerComponent } from './views/update-foyer/update-foyer.component';
import { DetailsFoyerComponent } from './views/details-foyer/details-foyer.component';
import { AddBlocComponent } from './views/add-bloc/add-bloc.component';
import { DetailBlocComponent } from './views/detail-bloc/detail-bloc.component';
import { ListeBlocComponent } from './views/liste-bloc/liste-bloc.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'add_foyer', component: AddFoyerComponent },
      { path: 'liste_foyer', component: ListeFoyerComponent },
      { path: 'edit/foyer/:idFoyer', component: UpdateFoyerComponent },
      { path: 'details/foyer/:idFoyer', component: DetailsFoyerComponent },
      { path: 'add/bloc', component: AddBlocComponent },
      { path: 'details_bloc/:idbloc', component: DetailBlocComponent },
      { path: 'liste/bloc', component: ListeBlocComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
