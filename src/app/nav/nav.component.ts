import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ILinks {
  label: string;
  href?: string;
  isDropdown: boolean;
  id?: 'games' | 'sports';
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, NgClass, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  @Input() show: boolean = false;
  @Input() selectedMenu: 'games' | 'sports' | null = null;
  @Output() menuToggled = new EventEmitter<'games' | 'sports'>();

  links: ILinks[] = [
    { label: 'Jogos', isDropdown: true, id: 'games' },
    { label: 'Esportes', isDropdown: true, id: 'sports' },
    { label: 'Loja', isDropdown: false, href: '/' },
    { label: 'Notícias', isDropdown: false, href: '/' },
    { label: 'Suporte', isDropdown: false, href: '/' }
  ];

  toggleMenu(link: ILinks) {
    if (link.id && link.isDropdown) {
      this.menuToggled.emit(link.id);
    }
  }
}
