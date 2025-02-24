import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { IGames } from './games.model';

export enum Platform {
  BLIZZARD = 'BLIZZARD',
  NITENDO = 'NITENDO',
  XBOX = 'XBOX',
  PLAYSTATION = 'PLAYSTATION'
}

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {
  @Input() games: IGames[] = [];
  @Output() filterChanged = new EventEmitter<string | null>();

  currentFilter: string | null = null;
  platforms = Object.values(Platform);

  setFilter(filter: string | null): void {
    if (this.currentFilter !== filter) {
      this.currentFilter = filter;
      this.filterChanged.emit(this.currentFilter);
    } else {
      this.currentFilter = null;
      this.filterChanged.emit(null);
    }
  }
}
