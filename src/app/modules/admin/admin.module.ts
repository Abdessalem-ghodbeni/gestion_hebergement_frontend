import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AddFoyerComponent } from './views/add-foyer/add-foyer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeFoyerComponent } from './views/liste-foyer/liste-foyer.component';
import { UpdateFoyerComponent } from './views/update-foyer/update-foyer.component';
import { DetailsFoyerComponent } from './views/details-foyer/details-foyer.component';
import { AffecterUniversiteComponent } from './views/affecter-universite/affecter-universite.component';
import { AddBlocComponent } from './views/add-bloc/add-bloc.component';
import { DetailBlocComponent } from './views/detail-bloc/detail-bloc.component';
import { ListeBlocComponent } from './views/liste-bloc/liste-bloc.component';
@NgModule({
  declarations: [
    AdminLayoutComponent,
    AddFoyerComponent,
    ListeFoyerComponent,
    UpdateFoyerComponent,
    DetailsFoyerComponent,
    AffecterUniversiteComponent,
    AddBlocComponent,
    DetailBlocComponent,
    ListeBlocComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, FormsModule],
})
export class AdminModule {
  constructor() {
    this.loadScript(
      'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'
    );
    this.loadScript(
      'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js'
    );
    this.loadScript(
      'https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/umd/simple-datatables.min.js'
    );
    this.loadScript('assets/back/js/scripts.js');
    this.loadScript('assets/back/assets/demo/chart-area-demo.js');
    this.loadScript('assets/back/assets/demo/chart-bar-demo.js');
    this.loadScript('assets/back/js/datatables-simple-demo.js');
  }

  loadScript(src: string) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }
}
