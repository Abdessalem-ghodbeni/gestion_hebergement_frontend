import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './modules/admin/layouts/admin-layout/admin-layout.component';
import { SigninComponent } from './home/views/signin/signin.component';
import { SignupComponent } from './home/views/signup/signup.component';
import { Error404Component } from './home/views/error404/error404.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'etudiant',
    loadChildren: () =>
      import('./modules/etudiant/etudiant.module').then(
        (m) => m.EtudiantModule
      ),
  },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
