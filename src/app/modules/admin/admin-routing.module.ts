import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AddFoyerComponent } from './views/add-foyer/add-foyer.component';
import { ListeFoyerComponent } from './views/liste-foyer/liste-foyer.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'add_foyer', component: AddFoyerComponent },
      { path: 'liste_foyer', component: ListeFoyerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
