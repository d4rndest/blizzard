import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { MenuComponent } from '../menu/menu.component';
import { ButtonComponent } from "../button/button.component";
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent, MenuComponent, ButtonComponent, LoginModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  show: boolean = false;
  selectedMenu: 'games' | 'sports' | null = null;
  isLoginModalOpen: boolean = false;

  toggleMenu(menu: 'games' | 'sports') {
    if (this.selectedMenu === menu && this.show) {
      this.show = false;
      this.selectedMenu = null;
    } else {
      this.show = true;
      this.selectedMenu = menu;
    }
  }

  toggleLoginModal() {
    this.isLoginModalOpen = !this.isLoginModalOpen;
  }
}
