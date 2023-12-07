import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PayloadLogin } from 'src/app/core/models/Payload/payload-login';
import { Role } from 'src/app/core/models/Role/role';
import { AuthentificationService } from 'src/app/core/services/authentification/authentification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  constructor(
    private _authentification_service: AuthentificationService,
    private _router: Router
  ) {}
  payload: PayloadLogin = { email: '', password: '' };

  login(loginForm: NgForm) {
    if (loginForm.valid) {
      this._authentification_service.login(this.payload).subscribe({
        next: (data: any) => {
          if (data && data.userDetails && data.userDetails.enabled) {
            Swal.fire({
              icon: 'success',
              title: 'Welcome',
              text: 'Connexion réussi!',
            });
            localStorage.setItem(
              'userconnect',
              JSON.stringify(data.userDetails)
            );
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            localStorage.setItem('state', '0');

            if (data.userDetails.role === Role.ADMIN) {
              this._router.navigateByUrl('admin');
            } else {
              this._router.navigateByUrl('/etudiant');
            }
          }
        },
        error: (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        },
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid data!',
      });
    }
  }
}
