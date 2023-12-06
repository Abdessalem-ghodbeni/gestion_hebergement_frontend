import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ɵDomRendererFactory2 } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss', '../../back.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminLayoutComponent implements OnInit {
  constructor(private renderer: ɵDomRendererFactory2, private el: ElementRef) {}
  ngOnInit(): void {}
  logout() {
    console.log('merci');
    const sidebarToggle = this.el.nativeElement.querySelector('#sidebarToggle');

    if (sidebarToggle) {
      sidebarToggle.addEventListener(
        'click',
        (event: { preventDefault: () => void }) => {
          event.preventDefault();

          // Vérifier la présence de la classe
          const isSidebarToggled =
            document.body.classList.contains('sb-sidenav-toggled');

          // Inverser la classe
          if (isSidebarToggled) {
            document.body.classList.remove('sb-sidenav-toggled');
          } else {
            document.body.classList.add('sb-sidenav-toggled');
          }

          localStorage.setItem(
            'sb|sidebar-toggle',
            isSidebarToggled.toString()
          );
        }
      );
    }
  }
}
